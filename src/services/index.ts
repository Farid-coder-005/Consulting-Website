import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { AppError } from "../middlewares/error";
import { CreateContactInput, LoginInput } from "../schemas";

const prisma = new PrismaClient();

export class ContactService {
  async create(data: CreateContactInput) {
    if (data.serviceId) {
      const service = await prisma.service.findUnique({ where: { id: data.serviceId } });
      if (!service) {
        throw new AppError("Service not found", 404);
      }
    }
    return prisma.contact.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { service: true },
      }),
      prisma.contact.count(),
    ]);
    return { contacts, total, page, limit, totalPages: Math.ceil(total / limit) };
  }
}

export class LocationService {
  async findAll() {
    return prisma.location.findMany({
      where: { isActive: true },
      include: { services: true },
      orderBy: { country: "asc" },
    });
  }

  async findById(id: string) {
    const location = await prisma.location.findUnique({
      where: { id },
      include: { services: true },
    });
    if (!location) throw new AppError("Location not found", 404);
    return location;
  }
}

export class ServiceService {
  async findAll() {
    return prisma.service.findMany({
      where: { isActive: true },
      orderBy: { title: "asc" },
    });
  }

  async findById(id: string) {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) throw new AppError("Service not found", 404);
    return service;
  }
}

export class PostService {
  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: { published: true },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { author: { select: { id: true, name: true, email: true } } },
      }),
      prisma.post.count({ where: { published: true } }),
    ]);
    return { posts, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findById(id: string) {
    const post = await prisma.post.findUnique({
      where: { id },
      include: { author: { select: { id: true, name: true, email: true } } },
    });
    if (!post) throw new AppError("Post not found", 404);
    return post;
  }
}

export class SearchService {
  async search(query: string, type: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const results: Record<string, unknown[]> = {};

    if (type === "all" || type === "services") {
      results.services = await prisma.service.findMany({
        where: {
          isActive: true,
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        },
        take: limit,
        skip,
      });
    }

    if (type === "all" || type === "posts") {
      results.posts = await prisma.post.findMany({
        where: {
          published: true,
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { content: { contains: query, mode: "insensitive" } },
          ],
        },
        take: limit,
        skip,
        include: { author: { select: { id: true, name: true } } },
      });
    }

    if (type === "all" || type === "locations") {
      results.locations = await prisma.location.findMany({
        where: {
          isActive: true,
          OR: [
            { country: { contains: query, mode: "insensitive" } },
            { city: { contains: query, mode: "insensitive" } },
            { address: { contains: query, mode: "insensitive" } },
          ],
        },
        take: limit,
        skip,
      });
    }

    return results;
  }
}

export class AuthService {
  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new AppError("Invalid email or password", 401);

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) throw new AppError("Invalid email or password", 401);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn } as jwt.SignOptions
    );

    return {
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }
}

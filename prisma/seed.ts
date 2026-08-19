import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 12);

  await prisma.user.upsert({
    where: { email: "admin@consulting.com" },
    update: {},
    create: {
      email: "admin@consulting.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  const locations = [
    {
      country: "Hungary",
      city: "Budapest",
      address: "Andrassy ut 47, Budapest 1061",
      phone: "+36 1 234 5678",
      email: "budapest@consulting.com",
      latitude: 47.4979,
      longitude: 19.0402,
    },
    {
      country: "Germany",
      city: "Berlin",
      address: "Friedrichstrasse 123, 10117 Berlin",
      phone: "+49 30 1234 5678",
      email: "berlin@consulting.com",
      latitude: 52.5200,
      longitude: 13.4050,
    },
    {
      country: "Czechia",
      city: "Prague",
      address: "Wenceslas Square 12, 110 00 Prague",
      phone: "+420 123 456 789",
      email: "prague@consulting.com",
      latitude: 50.0755,
      longitude: 14.4378,
    },
    {
      country: "Turkey",
      city: "Istanbul",
      address: "Istiklal Cad. 45, 34430 Beyoglu/Istanbul",
      phone: "+90 212 123 4567",
      email: "istanbul@consulting.com",
      latitude: 41.0082,
      longitude: 28.9784,
    },
    {
      country: "Poland",
      city: "Warsaw",
      address: "Marszalkowska 10, 00-001 Warsaw",
      phone: "+48 22 123 4567",
      email: "warsaw@consulting.com",
      latitude: 52.2297,
      longitude: 21.0122,
    },
    {
      country: "Serbia",
      city: "Belgrade",
      address: "Knez Mihailova 20, 11000 Belgrade",
      phone: "+381 11 123 4567",
      email: "belgrade@consulting.com",
      latitude: 44.7866,
      longitude: 20.4489,
    },
    {
      country: "Estonia",
      city: "Tallinn",
      address: "Viru valjak 2, 15186 Tallinn",
      phone: "+372 600 1234",
      email: "tallinn@consulting.com",
      latitude: 59.4370,
      longitude: 24.7536,
    },
    {
      country: "USA",
      city: "New York",
      address: "350 Fifth Avenue, New York, NY 10118",
      phone: "+1 212 555 0123",
      email: "newyork@consulting.com",
      latitude: 40.7484,
      longitude: -73.9857,
    },
    {
      country: "Singapore",
      city: "Singapore",
      address: "1 Raffles Place, Singapore 048616",
      phone: "+65 6123 4567",
      email: "singapore@consulting.com",
      latitude: 1.2838,
      longitude: 103.8591,
    },
    {
      country: "UAE",
      city: "Dubai",
      address: "Sheikh Zayed Road, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@consulting.com",
      latitude: 25.2048,
      longitude: 55.2708,
    },
  ];

  for (const location of locations) {
    await prisma.location.upsert({
      where: { email: location.email },
      update: {},
      create: location,
    });
  }

  const services = [
    {
      title: "Business Strategy Consulting",
      description: "Strategic planning and business development to drive growth and competitive advantage.",
      icon: "strategy",
    },
    {
      title: "Financial Advisory",
      description: "Expert financial analysis, planning, and risk management solutions.",
      icon: "finance",
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital solutions to modernize your business operations.",
      icon: "digital",
    },
    {
      title: "Human Resources Consulting",
      description: "Talent acquisition, organizational development, and HR strategy.",
      icon: "hr",
    },
    {
      title: "Legal & Compliance",
      description: "Regulatory compliance, legal advisory, and risk mitigation.",
      icon: "legal",
    },
    {
      title: "Tax Advisory",
      description: "Tax planning, optimization, and compliance services.",
      icon: "tax",
    },
    {
      title: "Management Consulting",
      description: "Operational excellence, process optimization, and change management.",
      icon: "management",
    },
    {
      title: "Marketing & Brand Strategy",
      description: "Brand development, market research, and go-to-market strategies.",
      icon: "marketing",
    },
  ];

  for (const service of services) {
    const existing = await prisma.service.findFirst({
      where: { title: service.title },
    });
    if (!existing) {
      await prisma.service.create({ data: service });
    }
  }

  const admin = await prisma.user.findUnique({ where: { email: "admin@consulting.com" } });
  if (admin) {
    const posts = [
      {
        title: "Welcome to Our Consulting Services",
        content: "We are excited to announce the launch of our global consulting platform...",
        excerpt: "Announcing our global consulting platform launch.",
        published: true,
        authorId: admin.id,
        tags: ["announcement", "launch"],
      },
      {
        title: "10 Tips for Digital Transformation in 2025",
        content: "Digital transformation is no longer optional for businesses looking to stay competitive...",
        excerpt: "Essential tips for your digital transformation journey.",
        published: true,
        authorId: admin.id,
        tags: ["digital", "tips", "2025"],
      },
    ];

    for (const post of posts) {
      const existing = await prisma.post.findFirst({ where: { title: post.title } });
      if (!existing) {
        await prisma.post.create({ data: post });
      }
    }
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

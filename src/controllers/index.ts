import { Request, Response, NextFunction } from "express";
import { ContactService, LocationService, ServiceService, PostService, SearchService, AuthService } from "../services";

const contactService = new ContactService();
const locationService = new LocationService();
const serviceService = new ServiceService();
const postService = new PostService();
const searchService = new SearchService();
const authService = new AuthService();

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await contactService.create(req.body);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const result = await contactService.findAll(page, limit);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const getLocations = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const locations = await locationService.findAll();
    res.json({ success: true, data: locations });
  } catch (error) {
    next(error);
  }
};

export const getLocationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const location = await locationService.findById(String(req.params.id));
    res.json({ success: true, data: location });
  } catch (error) {
    next(error);
  }
};

export const getServices = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const services = await serviceService.findAll();
    res.json({ success: true, data: services });
  } catch (error) {
    next(error);
  }
};

export const getServiceById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const service = await serviceService.findById(String(req.params.id));
    res.json({ success: true, data: service });
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const result = await postService.findAll(page, limit);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await postService.findById(String(req.params.id));
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const q = String(req.query.q || "");
    const type = String(req.query.type || "all");
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const results = await searchService.search(q, type, page, limit);
    res.json({ success: true, data: results });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.login(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

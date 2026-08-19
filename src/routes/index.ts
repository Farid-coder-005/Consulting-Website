import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createContact, getContacts, getLocations, getLocationById, getServices, getServiceById, getPosts, getPostById, search, login } from "../controllers";
import { validate, validateQuery } from "../middlewares/validate";
import { createContactSchema, loginSchema, searchQuerySchema } from "../schemas";
import { authenticate, authorize } from "../middlewares/auth";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: "Too many contact requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/contacts", contactLimiter, validate(createContactSchema), createContact);
router.get("/contacts", authenticate, authorize("admin"), getContacts);

router.get("/locations", getLocations);
router.get("/locations/:id", getLocationById);

router.get("/services", getServices);
router.get("/services/:id", getServiceById);

router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);

router.get("/search", validateQuery(searchQuerySchema), search);

router.post("/auth/login", validate(loginSchema), login);

export default router;

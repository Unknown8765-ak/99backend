import { Router } from "express";

import {
  createOrder,
  getMyOrders,
  getOrderById,
  cancelOrder,
} from "../controllers/order.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// All order routes require authentication
router.use(authMiddleware);

// Create new order (COD)
router.post("/", createOrder);

// Get logged-in user's orders
router.get("/", getMyOrders);

// Get single order
router.get("/:orderId", getOrderById);

// Cancel order
router.patch("/:orderId/cancel", cancelOrder);

export default router;
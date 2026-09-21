import type { UserPayload } from "../middlewares/auth.middleware.js";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}

export {};
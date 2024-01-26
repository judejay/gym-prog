import { Request, Response, NextFunction } from "express";

export function setContentJson(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.setHeader("Content-Type", "application/json");
  next();
}

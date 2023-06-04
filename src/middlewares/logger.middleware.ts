import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toLocaleString()}] [${req.method}] ON -> ${req.url}`);
  next();
};

export default logger;

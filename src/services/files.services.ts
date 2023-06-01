import { Request, Response } from 'express';

export const getFileById = async (req: Request, res: Response) => {
  const { filename } = req.params;
  res.sendFile(filename, { root: './files/' });
};

import { Request, Response } from 'express';

export const getPlaces = async (req: Request, res: Response) => {
  res.json({ ok: 'OK' });
};

export const getPlaceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ ok: 'OK', id });
};

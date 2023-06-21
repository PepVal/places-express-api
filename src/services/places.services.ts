import { Request, Response } from 'express';
import { FakePlaces } from '../fake-data/places.data';

export const getPlaces = async (req: Request, res: Response) => {
  const data = FakePlaces;
  res.status(200).json({ message: 'OK', data, statusCode: 200 });
};

export const getPlaceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const place = FakePlaces.find((p) => p.id === Number(id));
  if (!place) {
    return res.status(404).json({
      message: 'No existe el lugar solicitado',
      data: null,
      statusCode: 404,
    });
  }

  res.status(200).json({ message: 'OK', data: place, statusCode: 200 });
};

import { Request, Response } from 'express';

let Foods = [
  { id: 1, name: 'Encevollado', description: 'askfnlksdaf ksfladk f' },
  { id: 2, name: 'Chuleta asada', description: 'askfnlksdaf ksfladk f' },
  { id: 3, name: 'Seco de pollo', description: 'askfnlksdaf ksfladk f' },
];

let IdCount = 4;

export const findFoods = async (req: Request, res: Response) => {
  res.status(200).json(Foods);
};

export const findFoodById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const place = Foods.find((p) => p.id === Number(id));
  if (!place) {
    return res.status(404).json(null);
  }
  res.status(200).json(place);
};

export const createFood = async (req: Request, res: Response) => {
  const data = req.body;
  const newFood = { ...data, id: IdCount++ };
  Foods.push(newFood);
  res.status(200).json(newFood);
};

export const removeFood = async (req: Request, res: Response) => {
  const { id } = req.params;
  const place = Foods.find((p) => p.id === Number(id));
  if (!place) {
    return res.status(404).json(null);
  }
  Foods = Foods.filter((f) => f.id !== Number(id));
  res.status(200).json(place);
};

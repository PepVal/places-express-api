import { Router } from 'express';
import {
  createFood,
  findFoodById,
  findFoods,
  removeFood,
} from '../services/food.services';

const router = Router();

router.get('/', findFoods);
router.get('/:id', findFoodById);
router.post('/', createFood);
router.delete('/:id', removeFood);

export default router;

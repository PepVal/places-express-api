import { Router } from 'express';

import { getPlaceById, getPlaces } from './places.services';

const router = Router();

router.get('/', getPlaces);
router.get('/:id', getPlaceById);

export default router;

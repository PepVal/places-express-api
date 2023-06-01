import { Router } from 'express';

import { getFileById } from '../services/files.services';

const router = Router();

router.get('/:filename', getFileById);

export default router;

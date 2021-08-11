import { Router } from 'express';

import errorHandlerAsync from '../../middlewares/errorHandler';
import verifyToken from '../../middlewares/verifyToken';
import UserController from '../../controllers/UserController';

const router = Router();

router.post('/upload', verifyToken, UserController.uploadFile);
router.get('/users', verifyToken, errorHandlerAsync(UserController.getAll));
router.get('/users/:id', verifyToken, errorHandlerAsync(UserController.getOne));

export default router;

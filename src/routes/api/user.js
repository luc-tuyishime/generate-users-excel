import { Router } from 'express';

import errorHandlerAsync from '../../middlewares/errorHandler';
import verifyToken from '../../middlewares/verifyToken';
import UserController from '../../controllers/UserController';

const router = Router();

// Upload file
router.post('/upload', verifyToken, UserController.uploadFile);

// Fetch All Users
router.get('/users', verifyToken, errorHandlerAsync(UserController.getAll));

// Fecth A single User
router.get('/users/:id', verifyToken, errorHandlerAsync(UserController.getOne));

export default router;

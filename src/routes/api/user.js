import { Router } from 'express';

import errorHandlerAsync from '../../middlewares/errorHandler';
import verifyToken from '../../middlewares/verifyToken';
import UserController from '../../controllers/UserController';

import multerMiddleware from '../../middlewares/multer';

const router = Router();

router.post('/upload', verifyToken,  multerMiddleware.single("file"), errorHandlerAsync(UserController.uploadFile));

export default router;
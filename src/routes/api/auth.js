import { Router } from 'express';

import errorHandlerAsync from '../../middlewares/errorHandler';
import joiValidator from '../../middlewares/joiValidator';
import * as schema from '../../helpers/validation/joi-schemas';
import AuthController from '../../controllers/AuthController';

const router = Router();

// Login User
router.post(
  '/auth/login',
  joiValidator(schema.login),
  errorHandlerAsync(AuthController.login)
);

// Create User
router.post('/auth/signup', joiValidator(schema.newUser), errorHandlerAsync(AuthController.create));

// Display User
// router.get('/users/:id', verifyToken, checkInvalidToken, errorHandlerAsync(UserController.getOne));



export default router;

import { Router } from 'express';
import auth from './auth';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('User Management from an Excel file..'));
router.use('/', auth);
router.use('/', user);

export default router;

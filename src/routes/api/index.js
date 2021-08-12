import { Router } from 'express';
import auth from './auth';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('User Management from an Excel file..'));
router.use('/api/v1', auth);
router.use('/api/v1', user);

export default router;

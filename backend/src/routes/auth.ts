import { Router } from 'express';
import { authController } from '../controllers/auth';
import { requireAuth } from '../middleware/auth';

const router = Router();

// POST /api/auth/register - Register a new user
router.post('/register', authController.register);

// POST /api/auth/login - Login user
router.post('/login', authController.login);

// GET /api/auth/me - Get current user (protected route)
router.get('/me', requireAuth, (req, res) => {
  res.json({ user: req.user });
});

export const authRouter = router; 
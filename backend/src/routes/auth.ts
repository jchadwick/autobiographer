import { Router, Request, Response } from 'express';
import { authController } from '../controllers/auth';
import { requireAuth } from '../middleware/auth';

interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
  };
}

const router = Router();

// POST /api/auth/register - Register a new user
router.post('/register', authController.register);

// POST /api/auth/login - Login user
router.post('/login', authController.login);

// GET /api/auth/me - Get current user (protected route)
router.get('/me', requireAuth, (req: AuthRequest, res: Response) => {
  res.json({ user: req.user });
});

export const authRouter = router;

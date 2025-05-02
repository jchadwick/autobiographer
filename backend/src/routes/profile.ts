import { Router } from 'express';
import { profileController } from '../controllers/profile';
import { requireAuth } from '../middleware/auth';

const router = Router();

// All profile routes require authentication
router.use(requireAuth);

// GET /api/profile - Get user profile
router.get('/', profileController.getProfile);

// PUT /api/profile - Update user profile
router.put('/', profileController.updateProfile);

export const profileRouter = router; 
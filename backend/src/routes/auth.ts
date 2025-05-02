import { Router } from 'express';
import { registrationController } from '../controllers/registration';

const router = Router();

// Registration route
router.post('/register', registrationController.register);

export const authRoutes = router; 
import { Request, Response } from 'express';
import { registration, RegistrationError } from '../services/registration';

export const registrationController = {
  /**
   * Handle user registration
   */
  async register(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;

      // Validate required fields
      if (!email || !password) {
        return res.status(400).json({
          error: 'Email and password are required',
        });
      }

      // Register user
      const user = await registration.registerUser({
        email,
        password,
        name,
      });

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof RegistrationError) {
        return res.status(400).json({
          error: error.message,
        });
      }

      console.error('Registration error:', error);
      return res.status(500).json({
        error: 'Internal server error',
      });
    }
  },
};

import { db } from './database';
import { auth } from '../utils/auth';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const authService = {
  /**
   * Login user with email and password
   */
  async login(data: { email: string; password: string }): Promise<{ token: string; user: { id: string; email: string; name?: string } }> {
    // Get user by email
    const user = await db.getUserByEmail(data.email);
    if (!user) {
      throw new AuthError('Invalid email or password');
    }

    // Verify password
    const isValid = await auth.comparePassword(data.password, user.password);
    if (!isValid) {
      throw new AuthError('Invalid email or password');
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email 
      },
      env.jwtSecret,
      { expiresIn: '24h' }
    );

    // Return token and user data
    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name || undefined,
      },
    };
  },
}; 
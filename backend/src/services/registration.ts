import { db } from './database';
import { auth } from '../utils/auth';

export class RegistrationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RegistrationError';
  }
}

export const registration = {
  /**
   * Register a new user with email and password
   */
  async registerUser(data: {
    email: string;
    password: string;
    name?: string;
  }): Promise<{ id: string; email: string; name?: string }> {
    // Validate email format
    if (!auth.validateEmail(data.email)) {
      throw new RegistrationError('Invalid email format');
    }

    // Validate password strength
    const passwordValidation = auth.validatePassword(data.password);
    if (!passwordValidation.isValid) {
      throw new RegistrationError(passwordValidation.message || 'Invalid password');
    }

    // Check if user already exists
    const existingUser = await db.getUserByEmail(data.email);
    if (existingUser) {
      throw new RegistrationError('Email already registered');
    }

    // Hash password
    const hashedPassword = await auth.hashPassword(data.password);

    // Create user
    const user = await db.createUser({
      email: data.email,
      password: hashedPassword,
      name: data.name,
    });

    // Return user data without password
    return {
      id: user.id,
      email: user.email,
      name: user.name || undefined,
    };
  },
};

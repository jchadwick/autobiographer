import { db } from './database';

export class ProfileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProfileError';
  }
}

export const profileService = {
  /**
   * Get user profile by ID
   */
  async getProfile(userId: string): Promise<{ id: string; email: string; name?: string; createdAt: Date }> {
    const user = await db.getUserById(userId);
    if (!user) {
      throw new ProfileError('User not found');
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name || undefined,
      createdAt: user.createdAt,
    };
  },

  /**
   * Update user profile
   */
  async updateProfile(userId: string, data: { name?: string }): Promise<{ id: string; email: string; name?: string }> {
    // Get current user
    const user = await db.getUserById(userId);
    if (!user) {
      throw new ProfileError('User not found');
    }

    // Update user data
    const updatedUser = await db.updateUser(userId, {
      name: data.name,
    });

    return {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name || undefined,
    };
  },
}; 
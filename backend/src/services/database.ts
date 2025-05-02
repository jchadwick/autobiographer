import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const db = {
  // User operations
  async createUser(data: { email: string; password: string; name?: string }) {
    return prisma.user.create({
      data,
    });
  },

  async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  // Story operations
  async createStory(data: { title: string; content: string; userId: string }) {
    return prisma.story.create({
      data,
    });
  },

  async getStoryById(id: string) {
    return prisma.story.findUnique({
      where: { id },
      include: { user: true },
    });
  },

  async getStoriesByUserId(userId: string) {
    return prisma.story.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  },

  async updateStory(id: string, data: { title?: string; content?: string }) {
    return prisma.story.update({
      where: { id },
      data,
    });
  },

  async deleteStory(id: string) {
    return prisma.story.delete({
      where: { id },
    });
  },
}; 
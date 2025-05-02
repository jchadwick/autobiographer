import { PrismaClient } from '@prisma/client';
import { fileStorage } from './fileStorage';

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
    const contentFile = await fileStorage.saveTextContent(data.content);
    return prisma.story.create({
      data: {
        title: data.title,
        contentFile,
        userId: data.userId,
      },
    });
  },

  async getStoryById(id: string) {
    const story = await prisma.story.findUnique({
      where: { id },
      include: { user: true },
    });

    if (story) {
      const content = await fileStorage.getTextContent(story.contentFile);
      return {
        ...story,
        content,
      };
    }

    return null;
  },

  async getStoriesByUserId(userId: string) {
    const stories = await prisma.story.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });

    return Promise.all(
      stories.map(async (story) => {
        const content = await fileStorage.getTextContent(story.contentFile);
        return {
          ...story,
          content,
        };
      })
    );
  },

  async updateStory(id: string, data: { title?: string; content?: string }) {
    const story = await prisma.story.findUnique({ where: { id } });
    if (!story) throw new Error('Story not found');

    if (data.content) {
      await fileStorage.updateTextContent(story.contentFile, data.content);
    }

    return prisma.story.update({
      where: { id },
      data: {
        title: data.title,
        updatedAt: new Date(),
      },
    });
  },

  async deleteStory(id: string) {
    const story = await prisma.story.findUnique({ where: { id } });
    if (!story) throw new Error('Story not found');

    await fileStorage.deleteTextContent(story.contentFile);
    return prisma.story.delete({
      where: { id },
    });
  },
}; 
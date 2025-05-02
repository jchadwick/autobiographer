import { PrismaClient, User, Story } from '@prisma/client';
import { fileStorage } from './fileStorage';

const prisma = new PrismaClient();

export const db = {
  // User operations
  async createUser(data: { email: string; password: string; name?: string }): Promise<User> {
    return prisma.user.create({
      data,
    });
  },

  async getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async updateUser(id: string, data: { name?: string }): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  // Story operations
  async createStory(data: { title: string; content: string; userId: string }): Promise<Story> {
    const contentFile = await fileStorage.saveTextContent(data.content);
    return prisma.story.create({
      data: {
        title: data.title,
        contentFile,
        userId: data.userId,
      },
    });
  },

  async getStoryById(id: string): Promise<(Story & { content: string }) | null> {
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

  async getStoriesByUserId(userId: string): Promise<(Story & { content: string })[]> {
    const stories = await prisma.story.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });

    return Promise.all(
      stories.map(async story => {
        const content = await fileStorage.getTextContent(story.contentFile);
        return {
          ...story,
          content,
        };
      })
    );
  },

  async updateStory(
    id: string,
    data: { title?: string; content?: string }
  ): Promise<Story & { content: string }> {
    const story = await prisma.story.findUnique({ where: { id } });
    if (!story) throw new Error('Story not found');

    if (data.content) {
      await fileStorage.updateTextContent(story.contentFile, data.content);
    }

    const updatedStory = await prisma.story.update({
      where: { id },
      data: {
        title: data.title,
        updatedAt: new Date(),
      },
    });

    const content = await fileStorage.getTextContent(updatedStory.contentFile);
    return {
      ...updatedStory,
      content,
    };
  },

  async deleteStory(id: string): Promise<Story> {
    const story = await prisma.story.findUnique({ where: { id } });
    if (!story) throw new Error('Story not found');

    await fileStorage.deleteTextContent(story.contentFile);
    return prisma.story.delete({
      where: { id },
    });
  },
};

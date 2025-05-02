import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { Story } from '../types';
import { db } from './database';

const prisma = new PrismaClient();
const CONTENT_DIR = join(__dirname, '../../content');

export class StoryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StoryError';
  }
}

export const storyService = {
  /**
   * Create a new story
   */
  async createStory(userId: string, data: { title: string; content: string }): Promise<Story> {
    const contentFile = `${uuidv4()}.txt`;
    const contentPath = join(CONTENT_DIR, contentFile);

    await writeFile(contentPath, data.content, 'utf-8');

    const story = await prisma.story.create({
      data: {
        title: data.title,
        contentFile,
        userId,
      },
    });

    return {
      id: story.id,
      title: story.title,
      content: data.content,
      createdAt: story.createdAt,
      updatedAt: story.updatedAt,
      userId: story.userId,
    };
  },

  /**
   * Get a story by ID
   */
  async getStory(storyId: string, userId: string): Promise<Story> {
    const story = await db.getStoryById(storyId);

    if (!story) {
      throw new StoryError('Story not found');
    }

    // Ensure user owns the story
    if (story.userId !== userId) {
      throw new StoryError('Unauthorized access to story');
    }

    return story;
  },

  /**
   * Get all stories for a user
   */
  async getUserStories(userId: string): Promise<Story[]> {
    return db.getStoriesByUserId(userId);
  },

  /**
   * Update a story
   */
  async updateStory(
    storyId: string,
    userId: string,
    data: { title?: string; content?: string }
  ): Promise<Story> {
    // Check if story exists and user owns it
    const story = await this.getStory(storyId, userId);

    // Update the story
    return db.updateStory(storyId, {
      title: data.title,
      content: data.content,
    });
  },

  /**
   * Delete a story
   */
  async deleteStory(storyId: string, userId: string): Promise<void> {
    // Check if story exists and user owns it
    await this.getStory(storyId, userId);

    // Delete the story
    await db.deleteStory(storyId);
  },
};

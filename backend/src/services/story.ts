import { db } from './database';

export class StoryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StoryError';
  }
}

export interface Story {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const storyService = {
  /**
   * Create a new story
   */
  async createStory(userId: string, data: { title: string; content: string }): Promise<Story> {
    return db.createStory({
      title: data.title,
      content: data.content,
      userId,
    });
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
  async updateStory(storyId: string, userId: string, data: { title?: string; content?: string }): Promise<Story> {
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
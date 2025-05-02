import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_DIR = path.join(process.cwd(), 'storage', 'content');

export const fileStorage = {
  /**
   * Initialize storage directory
   */
  async initialize(): Promise<void> {
    await fs.mkdir(STORAGE_DIR, { recursive: true });
  },

  /**
   * Save text content to a file
   */
  async saveTextContent(content: string): Promise<string> {
    const filename = `${uuidv4()}.txt`;
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.writeFile(filepath, content, 'utf-8');
    return filename;
  },

  /**
   * Get text content from a file
   */
  async getTextContent(filename: string): Promise<string> {
    const filepath = path.join(STORAGE_DIR, filename);
    return fs.readFile(filepath, 'utf-8');
  },

  /**
   * Update text content in a file
   */
  async updateTextContent(filename: string, content: string): Promise<void> {
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.writeFile(filepath, content, 'utf-8');
  },

  /**
   * Delete a text content file
   */
  async deleteTextContent(filename: string): Promise<void> {
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.unlink(filepath);
  },

  async listTextFiles(): Promise<string[]> {
    return fs.readdir(STORAGE_DIR);
  },
};

import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_DIR = path.join(__dirname, '../../storage');

export const fileStorage = {
  async initialize() {
    try {
      await fs.access(STORAGE_DIR);
    } catch {
      await fs.mkdir(STORAGE_DIR, { recursive: true });
    }
  },

  async saveTextContent(content: string): Promise<string> {
    const filename = `${uuidv4()}.txt`;
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.writeFile(filepath, content, 'utf-8');
    return filename;
  },

  async getTextContent(filename: string): Promise<string> {
    const filepath = path.join(STORAGE_DIR, filename);
    return fs.readFile(filepath, 'utf-8');
  },

  async updateTextContent(filename: string, content: string): Promise<void> {
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.writeFile(filepath, content, 'utf-8');
  },

  async deleteTextContent(filename: string): Promise<void> {
    const filepath = path.join(STORAGE_DIR, filename);
    await fs.unlink(filepath);
  },

  async listTextFiles(): Promise<string[]> {
    return fs.readdir(STORAGE_DIR);
  },
}; 
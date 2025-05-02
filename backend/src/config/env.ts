import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key', // Default only for development
  isDevelopment: process.env.NODE_ENV !== 'production',
  database: {
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
}; 
import express from 'express';
import cors from 'cors';
import { fileStorage } from './services/fileStorage';
import { authRouter } from './routes/auth';
import { profileRouter } from './routes/profile';
import { storyRouter } from './routes/story';
import { env } from './config/env';

const app = express();

// Initialize storage
fileStorage.initialize().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);
app.use('/api/stories', storyRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});

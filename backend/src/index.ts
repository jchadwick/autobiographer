import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/auth';
import { fileStorage } from './services/fileStorage';

const app = express();
const port = process.env.PORT || 3000;

// Initialize storage
fileStorage.initialize().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

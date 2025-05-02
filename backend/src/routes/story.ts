import { Router } from 'express';
import { storyController } from '../controllers/story';
import { requireAuth } from '../middleware/auth';

const router = Router();

// All story routes require authentication
router.use(requireAuth);

// POST /api/stories - Create a new story
router.post('/', storyController.createStory);

// GET /api/stories - Get all stories for the current user
router.get('/', storyController.getUserStories);

// GET /api/stories/:id - Get a specific story
router.get('/:id', storyController.getStory);

// PUT /api/stories/:id - Update a story
router.put('/:id', storyController.updateStory);

// DELETE /api/stories/:id - Delete a story
router.delete('/:id', storyController.deleteStory);

export const storyRouter = router; 
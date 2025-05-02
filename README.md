# Autobiographer

A comprehensive application for creating personal autobiographies through guided questions and voice recording.

## Project Structure

```
/
├── frontend/           # React-based frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── assets/     # Static assets
│   │   ├── services/   # API services
│   │   ├── utils/      # Utility functions
│   │   ├── styles/     # Global styles
│   │   └── hooks/      # Custom React hooks
│   └── package.json
│
├── backend/            # Express.js based backend application
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utility functions
│   │   ├── middleware/   # Express middleware
│   │   └── config/       # Configuration files
│   └── package.json
│
└── shared/             # Shared code between frontend and backend
```

## Development Setup

### Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- PostgreSQL (v14.x or higher)
- MinIO/S3-compatible storage

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/autobiographer.git
   cd autobiographer
   ```

2. Install dependencies

   ```
   npm run install:all
   ```

3. Set up environment variables
   Create `.env` files in both the frontend and backend directories based on the provided `.env.example` files.

### Development Workflow

1. Start the development servers (both frontend and backend)

   ```
   npm start
   ```

2. Run linting checks

   ```
   npm run lint
   ```

3. Fix linting issues automatically

   ```
   npm run lint:fix
   ```

4. Format code
   ```
   npm run format
   ```

## Branching Strategy

We follow the Git Flow branching model:

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Feature branches
- `release/*`: Release branches
- `hotfix/*`: Hotfix branches

## Coding Standards

- Follow ESLint and Prettier configurations
- Write meaningful commit messages following the semantic commit format
- Include tests for new features
- Document new functions, components, and APIs

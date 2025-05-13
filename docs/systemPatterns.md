# System Patterns

## Architecture Overview
- Modern web app: React frontend, Node.js/Express backend
- Clear separation of concerns: client, server, data storage
- RESTful API (optionally GraphQL), WebSocket for real-time features
- Modular services: authentication, questions, responses, narrative, export, storage

## Data Layer
- Primary DB: MongoDB or PostgreSQL
- Caching: Redis
- File storage: audio, exports, backups
- Key models: User, Question, Response, AudioRecording, Narrative, Session

## Diagrams
- See technical-architecture.md for Mermaid diagrams of system and data models

## Speech-to-Text
- Options: client-side, server-side, hybrid (see technical-architecture.md)
- Local AI model (OpenAI Whisper or Mozilla DeepSpeech)

## Narrative Generation
- Rule-based and template-based, with NLP for fluency
- Editable, supports multiple organizational structures

## Security
- JWT authentication, role-based access, encryption at rest, HTTPS
- Regular audits, input validation, protection against web vulnerabilities

## Scalability & Performance
- Stateless APIs, microservices, CDN, caching, lazy loading

## Mobile Expansion
- PWA, React Native, or native apps (shared backend)

## DevOps
- Git workflow, CI/CD, Docker, automated testing, monitoring

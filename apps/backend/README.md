# StellarRent Backend

Backend for the StellarRent application built with Bun, Express.js, TypeScript, and Supabase.

## 🚀 Features

- 🔐 JWT Authentication with Supabase
- 🛡️ Rate limiting and security middleware
- 🗄️ Supabase integration for database operations
- 📝 Request validation with Zod
- 🔒 Comprehensive security middleware
- 🐳 Docker support for development and production
- 🔄 Hot-reloading in development
- 📊 Health checks and monitoring
- 🧪 Comprehensive testing setup

## 🛠️ Tech Stack

- **Runtime**: Bun (JavaScript runtime)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT + Supabase Auth
- **Validation**: Zod
- **Containerization**: Docker & Docker Compose
- **Testing**: Bun Test

## 📋 Prerequisites

- [Bun](https://bun.sh/) (version 1.0 or higher)
- [Docker](https://docs.docker.com/get-docker/) (optional, for containerized development)
- [Supabase Account](https://supabase.com/)

## 🚀 Quick Start

### Local Development (without Docker)

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual Supabase credentials
   ```

3. **Create the users table in Supabase:**
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR UNIQUE NOT NULL,
     password VARCHAR NOT NULL,
     name VARCHAR NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

4. **Start development server:**
   ```bash
   bun dev
   ```

   The server will start at `http://localhost:3000` with hot-reloading enabled.

### Docker Development

1. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

2. **Start with Docker Compose:**
   ```bash
   bun run docker:dev
   ```

   This will start the backend with Redis caching at `http://localhost:3000`.

## 🐳 Docker Commands

| Command | Description |
|---------|-------------|
| `bun run docker:build` | Build Docker image |
| `bun run docker:dev` | Start development environment |
| `bun run docker:prod` | Start production environment |
| `bun run docker:stop` | Stop all containers |
| `bun run docker:logs` | View backend logs |
| `bun run docker:shell` | Access container shell |
| `bun run docker:test` | Run tests in container |
| `bun run docker:clean` | Clean up containers and images |

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start development server with hot-reload |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun test` | Run test suite |
| `bun run docker:*` | Docker-related commands |

## 🌐 API Endpoints

### Authentication

- **POST /auth/register**
  - Request: `{"email": "user@example.com", "password": "secure123", "name": "John Doe"}`
  - Success (201): `{"id": 1, "email": "user@example.com", "name": "John Doe"}`
  - Errors: 400 (invalid input), 409 (email exists), 500 (server error)

- **POST /auth/login**
  - Request: `{"email": "user@example.com", "password": "secure123"}`
  - Success (200): `{"token": "jwt_token", "user": {...}}`

## 🏗️ Project Structure

```
apps/backend/
├── src/
│   ├── config/         # Configuration files
│   │   └── supabase.ts # Supabase client setup
│   ├── controllers/    # Route controllers
│   │   └── authController.ts
│   ├── middleware/     # Express middleware
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── rateLimiter.ts
│   ├── routes/         # API routes
│   │   └── auth.ts
│   ├── services/       # Business logic
│   │   └── auth.service.ts
│   ├── types/          # TypeScript type definitions
│   │   └── auth.types.ts
│   ├── validators/     # Request validators
│   │   └── auth.validator.ts
│   └── index.ts        # Application entry point
├── tests/              # Test files
│   └── docker.test.sh  # Docker testing script
├── dist/               # Built files (generated)
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Development environment
├── docker-compose.prod.yml # Production environment
├── .env.example        # Environment variables template
├── .dockerignore       # Docker ignore file
├── redis.conf          # Redis configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🤝 Contributing

1. Branch from main: `git checkout -b feature/your-feature`
2. Test changes and update docs if needed
3. Submit a pull request to main

## 🔧 Environment Variables

See `.env.example` for all required environment variables including:
- Supabase credentials
- JWT secret
- Stellar network configuration
- Redis configuration (for Docker)

## 🧪 Testing

Run the Docker test suite to verify your setup:

```bash
cd apps/backend
./tests/docker.test.sh
```

This will test Docker image building, container startup, API connectivity, and environment variable loading.

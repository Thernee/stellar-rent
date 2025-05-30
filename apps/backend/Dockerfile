# Multi-stage Dockerfile for StellarRent Backend
# Use official Node.js LTS image as base for minimal size
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install system dependencies for native modules
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S stellarrent -u 1001 -G nodejs

# Stage 2: Dependencies installation
FROM base AS deps

# Copy package.json and package-lock.json (if exists)
COPY package.json package-lock.json* ./

# Install dependencies
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi && npm cache clean --force

# Stage 3: Build stage
FROM base AS builder

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy package.json and source code
COPY package.json ./
COPY . .

# Build the application
RUN npm run build

# Stage 4: Production image
FROM base AS runner

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000

# Copy built application
COPY --from=builder --chown=stellarrent:nodejs /app/dist ./dist
COPY --from=builder --chown=stellarrent:nodejs /app/package.json ./
COPY --from=deps --chown=stellarrent:nodejs /app/node_modules ./node_modules

# Switch to non-root user
USER stellarrent

# Expose the backend port (default: 3000)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node --version || exit 1

# Set the default command to start the backend in production mode
CMD ["npm", "run", "start"]

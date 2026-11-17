# Use official Node.js LTS image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies including devDependencies for build
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Runner image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy application files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public
COPY --from=builder /app/vite.config.ts ./vite.config.ts

EXPOSE 3000

# Run preview server listening on all interfaces
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]

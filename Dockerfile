FROM node:20-alpine

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy full project source
COPY . .

# Build production bundle
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Run preview server on 0.0.0.0:3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]

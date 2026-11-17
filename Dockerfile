FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy full project source
COPY . .

# Build and generate route tree
RUN npm run build

ENV PORT=3000

EXPOSE 3000

# Start application server on port 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]

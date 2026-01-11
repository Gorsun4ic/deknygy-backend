FROM node:22-alpine

# 1. Install system dependencies required by Prisma on Alpine
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# 2. Install dependencies
COPY package*.json ./
RUN npm install

# 3. Copy source code
COPY . .

# 4. Generate Prisma Client (Use dummy URL to satisfy Prisma 7 config)
# We generate to the standard location to avoid alias hell
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

# 5. Build the application
# If this fails, the Docker build will STOP here and tell us WHY (The 89 errors)
RUN npm run build

EXPOSE 3000

# 6. Use the fail-safe start script
CMD ["npm", "run", "start:prod"]
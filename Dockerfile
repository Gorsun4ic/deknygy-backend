FROM node:22-alpine

# 1. Install necessary libraries for Prisma 7 on Alpine
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# 2. Copy dependency files
COPY package*.json ./

# 3. Install ALL dependencies
RUN npm install

# 4. Copy everything else
COPY . .

# 5. Generate Prisma Client (Ignore errors about DATABASE_URL during build)
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

# 6. Build the app (This creates the /app/dist folder)
RUN rm -f tsconfig.build.tsbuildinfo && rm -rf dist && npm run build

# 7. Check where main.js actually is (This will show in Railway build logs)
RUN find dist -name "main.js"

EXPOSE 3000

# 8. Fail-safe start command
CMD ["npm", "run", "start:prod"]
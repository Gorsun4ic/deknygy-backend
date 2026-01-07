FROM node:22-alpine

WORKDIR /app

# 1. Install dependencies
COPY package*.json ./
RUN npm install

# 2. Copy source code
COPY . .

# 3. Generate Prisma Client (Required for Prisma 7 custom output)
RUN npx prisma generate

# 4. Build the NestJS application (This creates the /app/dist folder)
RUN npm run build

EXPOSE 3000

# 5. Run migrations and start
CMD ["npm", "run", "start:prod"]
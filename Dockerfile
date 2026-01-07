FROM node:22-alpine

WORKDIR /app

# 1. Install dependencies
COPY package*.json ./
RUN npm install

# 2. Copy source code
COPY . .

# 3. Generate Prisma Client 
# We provide a dummy DATABASE_URL just to satisfy the config loader during build
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

# 4. Build the NestJS application
RUN npm run build

EXPOSE 3000

# 5. Run migrations and start (This will use the REAL Railway DATABASE_URL)
CMD ["npm", "run", "start:prod"]
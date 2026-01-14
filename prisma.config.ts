import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // This tells the CLI where to find the connection string
    url: process.env.DATABASE_URL,
  },
});

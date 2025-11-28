"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.feedbackCategory.createMany({
        data: [
            { key: 'positive', description: 'Positive Feedback' },
            { key: 'not_found', description: 'Book Not Found' },
            { key: 'price_wrong', description: 'Wrong Price' },
        ],
        skipDuplicates: true,
    });
    console.log('✅ Feedback categories seeded');
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map
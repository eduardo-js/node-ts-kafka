import { PrismaClient } from "@prisma/client"
export const populate = async () => {
    const db = new PrismaClient()

    try {
        db.$connect()
        await db.user.create({
            data: {
                id: 'user@email.com'
            }
        })

        await db.product.create({
            data: {
                id: 1
            }
        })
        db.$disconnect()

        console.info('🎉 Prisma populated successfully 🎉')
    } catch (e) {
        console.log('error :(\n', e)
        db.$disconnect()
    }
}

void populate()
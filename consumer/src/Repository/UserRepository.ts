
import { PrismaClient, Purchase } from "@prisma/client";
export default class UserRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async updatePurchase(id: string, purchase: number) {
        return await this.prisma.user.update({
            where: {
                id
            },
            data: {
                purchases: {
                    push: purchase
                }
            }
        })
    }
}
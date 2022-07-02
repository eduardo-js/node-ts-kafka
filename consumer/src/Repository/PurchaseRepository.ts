
import { PrismaClient, Purchase } from "@prisma/client";
export default class PurchaseRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async create(data: Purchase) {
        return await this.prisma.purchase.create({
            data
        })
    }
}
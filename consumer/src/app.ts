import purchasesConsumer from './Messaging/Kafka'
import IPurchase from './models/Purchase'
import Prisma from './Repository'
import PurchaseRepository from './Repository/PurchaseRepository'
import UserRepository from './Repository/UserRepository'

export async function listen() {
    await purchasesConsumer.run({
        eachMessage: async (msg) => {
            const purchase = JSON.parse(msg.message.value!.toString()) as IPurchase
            await new PurchaseRepository(Prisma).create(purchase)
            await new UserRepository(Prisma).updatePurchase(purchase.userId, purchase.productId)
            console.info(`Purchase ${purchase} was processes successfully`)
        }
    })


}
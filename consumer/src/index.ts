import { listen } from "./app"
import purchasesConsumer from "./Messaging/Kafka"


const main = async () => {
    try {
        purchasesConsumer.connect()
        await purchasesConsumer.subscribe({
            topic: "purchase",
            fromBeginning: false
        })
        listen()
    } catch (error) {
        purchasesConsumer.disconnect()
        console.error(`Error: ${error}`)
    }
}

main()
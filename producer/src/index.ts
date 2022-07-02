import app from "./app"
import purchasesProducer from "./Messaging/Kafka"


const main = () => {
    try {
        purchasesProducer.connect()
        purchasesProducer.disconnect()
        app.listen(3000)
        console.log(`App listening @ http://localhost:3000`)
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

main()
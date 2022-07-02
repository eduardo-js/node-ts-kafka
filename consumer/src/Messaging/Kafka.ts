import { Kafka } from 'kafkajs'

const purchasesConsumer = new Kafka({
    brokers: ['localhost:9092'], clientId: 'purchase-consumer'
}).consumer({ groupId: 'purchase-consumer' })


export default purchasesConsumer
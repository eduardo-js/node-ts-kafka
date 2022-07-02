import { Kafka, logCreator } from 'kafkajs'

const purchasesProducer = new Kafka({
    brokers: ['localhost:9092'],
    clientId: 'purchase-producer'
}).producer()


export default purchasesProducer
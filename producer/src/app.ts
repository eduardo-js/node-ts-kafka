import express, { Request, Response } from 'express'
import { CompressionTypes } from 'kafkajs'
import purchasesProducer from './Messaging/Kafka'

const app = express()
app.use(express.json())

app.post('/api/purchase', async function (req: Request, res: Response) {
    await purchasesProducer.send({
        topic: 'purchase',
        compression: CompressionTypes.GZIP,
        messages: [{ value: JSON.stringify(req.body) }]
    })
    return res.end()
})

export default app
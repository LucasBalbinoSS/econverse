import fastify from "fastify"
import axios from "axios"
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET']
  })

app.get('/api/products', async (_, reply) => {
    try {
        const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        if (!response.data.success) {
            throw new Error('Sem sucesso na requisição')
        }
        reply.send(response.data.products)
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao buscar produtos' })
    }
})

const start = async () => {
    try {
        await app.listen({ port: 3333 })
        console.log('Servidor rodando na porta 3333')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
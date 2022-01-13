import { Server } from './Server'

const port = process.env.PORT || 4000

const server = new Server({ port })
server.start()

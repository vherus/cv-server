import { config } from 'dotenv'
config()

import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import experienceRouter from './routes/experience/experience.router'

const server: Application = express()

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(cors())
server.use(express.json())
server.use('/experience', experienceRouter)

server.use('*', (_req: Request, res: Response) => {
  res.status(404).json({
    message: 'path not found'
  })
})

export default server
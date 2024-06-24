import { config } from 'dotenv'
config()

import express, { Application, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import experienceRouter from './routes/experience/experience.router'
import APIError from './error/APIError'

const server: Application = express()

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(cors({
  origin: process.env.CLIENT_URL
}))
server.use(express.json())
server.use('/experience', experienceRouter)

server.use('*', (_req: Request, res: Response) => {
  res.status(404).json({
    message: 'path not found'
  })
})

server.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof APIError) {
    return res.status(error.statusCode).json({
      error: error.message
    })
  }

  res.status(500).json({
    error: 'Internal server error'
  })
})

export default server
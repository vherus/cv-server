import server from './server'
import { PORT } from './config'

server.listen(PORT, () => {
  console.info(`API running on port ${PORT}`)
})
import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
  res.json({first: true})
})

app.use('/api', apiRouter)

app.all('*', (req, res) => {
  res.json({ok: true})
})


export default app

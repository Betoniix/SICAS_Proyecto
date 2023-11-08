import Express from 'express'
import { LoginRouter } from './auth/login-router'
import { CapacityRouter } from './capacity/capacity-router'

export const app = Express()

app.use(Express.json())
app.use('/auth', LoginRouter)
app.use('/capacity', CapacityRouter)
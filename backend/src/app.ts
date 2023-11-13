import Express from 'express'
import { LoginRouter } from './auth/login-router'
import { CapacityRouter } from './capacity/capacity-router'
import { QuestionRouter } from './questions/question-router'
import { AlertRouter } from './alerts/alert-router'
import { ReservationsRouter } from './reservation/reservation-router'
import { ScannerRouter } from './scaner/scanner-router'
import cors from 'cors'
import { RoomsRouter } from './rooms/rooms-router'

export const app = Express()

app.use(Express.json())
app.use(cors({ origin: '*' }))
app.use('/auth', LoginRouter)
app.use('/capacity', CapacityRouter)
app.use('/questions', QuestionRouter)
app.use('/alerts', AlertRouter)
app.use('/reservations', ReservationsRouter)
app.use('/rooms', RoomsRouter)
app.use('/qr', ScannerRouter)


//Get, Post, Put, delete
//http://localhost:4444/alerts/create
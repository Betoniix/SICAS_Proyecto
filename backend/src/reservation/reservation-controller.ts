import { Request, Response } from "express";
import { ReservationService } from "./reservation-service";
import { CreateReservationsDTO } from "./dto/create-reservation-dto";


export class ReservationsController {
    constructor(private readonly service: ReservationService) { }



    async GetAllSubjectsAvailable(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await this.service.getSubject(Number.parseInt(id))
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong getting student subjects')
        }
    }

    async CreateReservations(req: Request, res: Response) {
        try {
            const createReservation = req.body as CreateReservationsDTO
            const result = await this.service.createReservation(createReservation)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong creating reservations')
        }
    }

}
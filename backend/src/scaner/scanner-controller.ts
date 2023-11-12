import { Request, Response } from "express";
import { ScannerService } from "./scanner-service";
import { GetReservationsDTO } from "./dto/get-reservations-dto";


export class ScannerController {
    constructor(private readonly service: ScannerService) { }

    async ConfirmReservation(req: Request, res: Response) {
        try {
            const qrData = req.body as GetReservationsDTO
            const result = await this.service.validateReservation(qrData)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Invalid QR')
        }
    }

}
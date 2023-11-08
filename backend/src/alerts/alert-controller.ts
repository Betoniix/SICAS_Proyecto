import { Request, Response } from "express";
import { AlertService } from "./alert-service";
import { SendAlertDTO } from "./dto/send-alert-dto";

export class AlertController {
    constructor(private readonly service: AlertService) { }

    async SetBanToStudent(req: Request, res: Response) {
        try {
            const studentBan = req.body as SendAlertDTO
            const result = await this.service.SetBan(studentBan)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Something went wrong creating the BAN' })
        }

    }

}
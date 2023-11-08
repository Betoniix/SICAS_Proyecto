import { Request, Response } from "express";
import { LoginService } from "./capacity-service";
import { UpdatePercentageDTO } from "./dto/update-percentage-dto";


export class CapacityController {
    constructor(private readonly service: LoginService) { }

    async GetCapacityPercentage(_: Request, res: Response) {
        try {
            const result = await this.service.getPercentage()
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong getting percentage')
        }
    }

    async UpdateCapacityPercentage(req: Request, res: Response) {
        try {
            const newPercentage = req.body as UpdatePercentageDTO
            const result = await this.service.UpdatePercentage(newPercentage.percentage)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong updating percentage')
        }
    }

}
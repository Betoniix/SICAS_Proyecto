import { Request, Response } from "express";
import { RoomsService } from "./rooms-service";
import { UpdateClassroomDTO } from "./dto/update-classroom-dto";
import { CreateClassroomDTO } from "./dto/create-classroom-dto";

export class RoomsController {
    constructor(private readonly service: RoomsService) { }

    async UpdateRoom(req: Request, res: Response) {
        try {
            const updateDTO = req.body as UpdateClassroomDTO
            const result = await this.service.updateRoom(updateDTO)

            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error' })
        }
    }

    async GetRoomByID(req: Request, res: Response) {
        try {
            const { id } = req.body
            const result = await this.service.getRoomByID(Number.parseInt(id))
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error' })
        }
    }

    async GetAllRooms(req: Request, res: Response) {
        try {
            const result = await this.service.getAllRooms()
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error' })
        }
    }

    async GetAllAvailableBuilds(req: Request, res: Response) {
        try {
            const result = await this.service.GetAllBuild()
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error' })
        }
    }

    async CreaeteRoom(req: Request, res: Response) {
        try {
            const createDTO = req.body as CreateClassroomDTO
            const result = await this.service.createRoom(createDTO)
            res.send({ data: result })

        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error' })
        }
    }
}
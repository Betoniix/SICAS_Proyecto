import { Request, Response } from "express";
import { StudentService } from "./student-service";

export class StudentController {
    constructor(private readonly service: StudentService) { }

    async GetStudentId(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await this.service.getIDStudent(Number.parseInt(id))
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(500).send({ data: 'Error getting student ID' })
        }
    }
}
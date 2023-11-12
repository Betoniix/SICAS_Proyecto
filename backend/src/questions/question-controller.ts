import { Request, Response } from "express";
import { QuestionService } from "./question-service";
import { UpdateQuestionDTO } from "./dto/update-question-dto";
import { CreateQuestionDTO } from "./dto/create-question-dto";

export class QuestionController {
    constructor(private readonly service: QuestionService) { }

    async CreateQuestion(req: Request, res: Response) {
        try {
            const createDTO = req.body as CreateQuestionDTO
            const result = await this.service.CreateQuestion(createDTO)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong creating the question')
        }
    }

    async UpdateQuestion(req: Request, res: Response) {
        try {
            const updateDTO = req.body as UpdateQuestionDTO
            const result = await this.service.UpdateQuestion(updateDTO)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong geating the question')
        }
    }

    async DeleteQuestion(req: Request, res: Response) {
        try {
            const { id } = req.body as { id: number }
            const result = await this.service.DeleteQuestion(id)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong geating the question')
        }
    }

    async GetAllQuestions(_: Request, res: Response) {
        try {
            const result = await this.service.GetQuestions()
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong geating the questions')
        }
    }

    async GetQuestionByID(req: Request, res: Response) {
        try {
            const { id } = req.body as { id: number }
            const result = await this.service.GetQuestion(id)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('Something went wrong geating the question')
        }
    }

}
import { Prisma } from "@prisma/client"
import { CreateQuestionDTO } from "./dto/create-question-dto"
import { UpdateQuestionDTO } from "./dto/update-question-dto"

type CreateResponse = { answer: boolean, question: string }
type GetResponse = { id: number, answer: boolean, question: string }

export interface IQuestions {
    create(createDTO: CreateQuestionDTO): Promise<CreateResponse | null>
    update(updateDTO: UpdateQuestionDTO): Promise<boolean>
    delete(id: number): Promise<boolean>
    get(id: number): Promise<GetResponse | null>
    getAll(): Promise<GetResponse[] | null>
}

export class QuestionStore implements IQuestions {
    constructor(private readonly store: Prisma.QuestionsDelegate) { }

    async create(createDTO: CreateQuestionDTO): Promise<CreateResponse | null> {
        try {
            const result = await this.store.create({ data: { answer: createDTO.answer, question: createDTO.question } })
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async update(updateDTO: UpdateQuestionDTO): Promise<boolean> {
        try {
            await this.store.update({ data: { answer: updateDTO.answer, question: updateDTO.question }, where: { id: updateDTO.id } },)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.store.delete({ where: { id: id } })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async get(id: number): Promise<GetResponse | null> {
        try {
            const result = await this.store.findFirst({ where: { id: id } })
            if (result === null) throw new Error(`Cannot find question with ID ${id}`)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async getAll(): Promise<GetResponse[] | null> {
        try {
            const result = await this.store.findMany()
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
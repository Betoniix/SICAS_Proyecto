import { CreateQuestionDTO } from "./dto/create-question-dto";
import { UpdateQuestionDTO } from "./dto/update-question-dto";
import { IQuestions } from "./question-store";

export class QuestionService {
    constructor(private readonly questionStore: IQuestions) { }

    async UpdateQuestion(updateDTO: UpdateQuestionDTO) { }

    async CreateQuestion(createDTO: CreateQuestionDTO) {

    }

    async DeleteQuestion(id: number) {
        const result = await this.questionStore.delete(id)
        return result
    }

    async GetQuestion(id: number) {
        const result = await this.questionStore.get(id)
        if (result === null) throw new Error(`Cannot get Question with ID ${id}`)
        return result
    }

    async GetQuestions() {
        const result = await this.questionStore.getAll()
        if (result === null) throw new Error('Cannot get Questions')
        return result
    }
}
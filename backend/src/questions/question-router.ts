import { Router } from "express";
import { controller } from "./dependencies";

export const QuestionRouter = Router()
QuestionRouter.get('/', controller.GetAllQuestions.bind(controller))
QuestionRouter.get('/:id', controller.GetQuestionByID.bind(controller))
QuestionRouter.post('/create', controller.CreateQuestion.bind(controller))
QuestionRouter.put('/update', controller.UpdateQuestion.bind(controller))
QuestionRouter.delete('/delete', controller.DeleteQuestion.bind(controller))

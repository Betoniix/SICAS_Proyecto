import { Router } from "express";
import { controller } from "./dependencies";

export const StudentRouter = Router()
StudentRouter.get('/:id', controller.GetStudentId.bind(controller))
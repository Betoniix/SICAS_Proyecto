import { Router } from "express";
import { controller } from "./dependencies";

export const StudentRouter = Router()
StudentRouter.get('/:id', controller.GetStudentId.bind(controller))
StudentRouter.get('/ban/:id', controller.CheckBan.bind(controller))
StudentRouter.get('/reservation/:id', controller.CheckReservationDone.bind(controller))

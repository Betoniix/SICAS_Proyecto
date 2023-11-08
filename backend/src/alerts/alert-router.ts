import { Router } from "express";
import { controller } from "./dependencies";

export const AlertRouter = Router()

AlertRouter.post('/create', controller.SetBanToStudent.bind(controller))
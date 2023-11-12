import { Router } from "express";
import { controller } from "./dependencies";

export const LoginRouter = Router()

LoginRouter.post('/', controller.Authenticate.bind(controller))

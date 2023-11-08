import { Router } from "express";
import { controller } from "./dependencies";

export const CapacityRouter = Router()

CapacityRouter.put('/update', controller.UpdateCapacityPercentage.bind(controller))
CapacityRouter.get('/', controller.GetCapacityPercentage.bind(controller))

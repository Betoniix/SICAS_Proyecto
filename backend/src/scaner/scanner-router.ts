import { Router } from "express";
import { controller } from "./dependencies";

export const ScannerRouter = Router()
ScannerRouter.post('/', controller.ConfirmReservation.bind(controller))


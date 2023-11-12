import { Router } from "express";
import { controller } from "./dependencies";

export const ReservationsRouter = Router()
ReservationsRouter.get('/:id', controller.GetAllSubjectsAvailable.bind(controller))
ReservationsRouter.post('/create', controller.CreateReservations.bind(controller))

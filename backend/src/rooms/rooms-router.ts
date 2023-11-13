import { Router } from "express";
import { controller } from "./dependencies";

export const RoomsRouter = Router()
RoomsRouter.get('/', controller.GetAllRooms.bind(controller))
RoomsRouter.get('/builds', controller.GetAllAvailableBuilds.bind(controller))
RoomsRouter.get('/:id', controller.GetRoomByID.bind(controller))
RoomsRouter.put('/update', controller.UpdateRoom.bind(controller))
RoomsRouter.post('/create', controller.CreaeteRoom.bind(controller))
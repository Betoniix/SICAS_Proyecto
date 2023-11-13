import { RoomsController } from "./rooms-controller";
import { RoomsService } from "./rooms-service";
import { RoomsStore } from "./rooms-store";


const service = new RoomsService(new RoomsStore())
export const controller = new RoomsController(service)
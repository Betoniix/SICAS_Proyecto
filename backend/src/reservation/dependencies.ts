import { DBConnection } from "../utils/db-connection";
import { ReservationsController } from "./reservation-controller";
import { ReservationService } from "./reservation-service";
import { ReservationStore } from "./reservation-store";

const client = DBConnection.instance.client
const store = new ReservationStore()
const service = new ReservationService(store)
export const controller = new ReservationsController(service)
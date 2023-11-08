import { CapacityController } from "./capacity-controller";
import { LoginService } from "./capacity-service";
import { CapacityStore } from "./capacity-store";
import { DBConnection } from "../utils/db-connection";

const client = DBConnection.instance!.client
const capacityStore = new CapacityStore(client!.capacity)
const capacityService = new LoginService(capacityStore)

export const controller = new CapacityController(capacityService)
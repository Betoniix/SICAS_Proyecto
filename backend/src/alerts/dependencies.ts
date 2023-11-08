import { AlertController } from "./alert-controller";
import { AlertService } from "./alert-service";
import { AlertStore } from "./alert-store";

const service = new AlertService(new AlertStore())
export const controller = new AlertController(service)
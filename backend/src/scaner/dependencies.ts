import { DBConnection } from "../utils/db-connection";
import { ScannerController } from "./scanner-controller";
import { ScannerService } from "./scanner-service";
import { ScannerStore } from "./scanner-store";

const client = DBConnection.instance.client
const store = new ScannerStore()
const service = new ScannerService(store)
export const controller = new ScannerController(service)
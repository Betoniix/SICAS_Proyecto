import { LoginController } from "./login-controller";
import { LoginService } from "./login-service";
import { LoginStore } from "./login-store";
import { DBConnection } from "../utils/db-connection";

const client = DBConnection.instance!.client
const loginStore = new LoginStore(client!.users)
const loginService = new LoginService(loginStore)

export const controller = new LoginController(loginService)
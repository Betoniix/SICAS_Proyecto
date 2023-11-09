import { DBConnection } from "../utils/db-connection";
import { QuestionController } from "./question-controller";
import { QuestionService } from "./question-service";
import { QuestionStore } from "./question-store";

const client = DBConnection.instance.client
const store = new QuestionStore(client.questions)
const service = new QuestionService(store)
export const controller = new QuestionController(service)
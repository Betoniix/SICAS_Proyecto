import { StudentController } from "./student-controller";
import { StudentService } from "./student-service";
import { StudentStore } from "./student-store";


const service = new StudentService(new StudentStore())
export const controller = new StudentController(service)
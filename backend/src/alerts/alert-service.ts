import { error } from "console";
import { Mailer } from "../utils/mailer";
import { IAlerts } from "./alert-store";
import { SendAlertDTO } from "./dto/send-alert-dto";


export class AlertService {
    constructor(private readonly store: IAlerts) { }

    async SetBan(sendEmail: SendAlertDTO) {
        const mailer = Mailer.instance
        const result = await this.store.create(sendEmail)

        if (result === null) throw error('Student not found')

        console.log(result)


        const { end_ban, start_ban } = sendEmail
        const SUBJECT = 'Bloqueo de acceso'
        const text = `Estimo alumno, por este medio se le notifica que ha sido suspendido en el periodo ${start_ban} a ${end_ban} por presentar COVICHO`

        await mailer.sendMail(result!.user.email, SUBJECT, text)


        return result
    }
}
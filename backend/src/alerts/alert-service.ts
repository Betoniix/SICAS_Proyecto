import { Mailer } from "../utils/mailer";
import { IAlerts } from "./alert-store";
import { SendAlertDTO } from "./dto/send-alert-dto";


export class AlertService {
    constructor(private readonly store: IAlerts) { }

    async SetBan(sendEmail: SendAlertDTO) {
        const mailer = Mailer.instance
        const { email, end_ban, start_ban } = sendEmail
        const SUBJECT = 'Bloqueo de acceso'
        const text = `Estimo alumno, por este medio se le notifica que ha sido suspendido en el periodo ${start_ban} a ${end_ban} por presentar COVICHO`

        await mailer.sendMail(email, SUBJECT, text)

        const result = await this.store.create(sendEmail)
        return result
    }
}
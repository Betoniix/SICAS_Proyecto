import { Prisma } from "@prisma/client"
import { SendAlertDTO } from "./dto/send-alert-dto"
import { DBConnection } from "../utils/db-connection"

export interface IAlerts {
    create(alertDTO: SendAlertDTO): Promise<boolean>
}

export class AlertStore implements IAlerts {


    async create(alertDTO: SendAlertDTO): Promise<boolean> {
        try {
            const client = DBConnection.instance.client

            const studentID = await client.users.findFirst({ where: { email: alertDTO.email }, select: { Students: { select: { id: true } } } })
            await client.bans.create({ data: { id_student: studentID!.Students!.id, end_ban: alertDTO.end_ban, start_ban: alertDTO.start_ban } })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
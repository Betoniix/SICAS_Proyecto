import { Prisma } from "@prisma/client"
import { SendAlertDTO } from "./dto/send-alert-dto"
import { DBConnection } from "../utils/db-connection"

type student = {
    id: number;
    user: {
        email: string;
    };
}

export interface IAlerts {
    create(alertDTO: SendAlertDTO): Promise<student | null>
}

export class AlertStore implements IAlerts {


    async create(alertDTO: SendAlertDTO): Promise<student | null> {
        try {
            const client = DBConnection.instance.client

            const student = await client.students.findFirst({ where: { plate: alertDTO.email }, select: { id: true, user: { select: { email: true } } } })

            if (student === null) throw new Error('User not found')

            await client.bans.create({ data: { id_student: student!.id, end_ban: alertDTO.end_ban, start_ban: alertDTO.start_ban } })

            return student
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
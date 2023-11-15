import { DBConnection } from "../utils/db-connection"

type getRestul = { id: number }

export interface IStudent {
    get(id: number): Promise<getRestul | null>
    getBan(id: number): Promise<user_ban | null>
    getReservation(id: number): Promise<boolean>
}

const client = DBConnection.instance.client

type user_ban = {
    id: number;
    start_ban: string;
    end_ban: string;
    id_student: number;
}

export class StudentStore implements IStudent {
    async get(id: number): Promise<getRestul | null> {
        try {
            const result = await client.students.findFirst({ where: { id_user: id } })
            console.log(result)
            if (result === null) throw new Error('Student doesnt exist')
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getBan(id: number): Promise<user_ban | null> {
        try {
            const ban = await client.bans.findFirst({ where: { id_student: id } })

            if (ban === null) throw new Error('No ban founded with id ' + id)

            return ban
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getReservation(id: number): Promise<boolean> {
        try {
            const nextDay = new Date()
            nextDay.setDate(new Date().getDate() + 1)
            const UTCFORMAT = `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`

            const reservation = await client.reservations.findFirst({ where: { id_student: id, reservation_day: UTCFORMAT } })

            if (reservation == null) throw new Error()

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
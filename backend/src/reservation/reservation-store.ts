import { Prisma } from "@prisma/client"
import { DBConnection } from "../utils/db-connection"
import { CreateReservationsDTO } from "./dto/create-reservation-dto";


export type GetResponse = {
    group: {
        classroom: {
            id: number;
            name: string;
            capacity: number;
            id_build: number;
        };
        subject: {
            id: number;
            name: string;
            Hours: {
                start_hour: string;
                end_hour: string;
                day: {
                    id: number;
                    name: string;
                };
            }[];
        };
    };
}[]

export interface IReservation {
    getSessions(id: number): Promise<GetResponse | null>
    getCapacity(): Promise<number>
    getReservations(id_subject: number): Promise<number>
    create(reservation: CreateReservationsDTO): Promise<boolean | null>
}

export class ReservationStore implements IReservation {
    async getReservations(id_subject: number): Promise<number> {
        try {
            const client = DBConnection.instance.client
            const nextDay = new Date()
            nextDay.setDate(new Date().getDate() + 1)
            const UTCFORMAT = `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`

            const result = await client.reservations.count({
                where: {
                    id_subject,
                    reservation_day: UTCFORMAT
                }
            })

            return result
        } catch (error) {
            console.log(error)
            return 0
        }
    }

    async getSessions(id: number): Promise<GetResponse | null> {
        try {
            const client = DBConnection.instance.client
            const subscriptions = await client.subscriptions.findMany({
                where: { id_student: id },
                select: { group: { select: { classroom: true, subject: { select: { id: true, name: true, Hours: { select: { end_hour: true, start_hour: true, day: true } } }, } } } }
            })
            return subscriptions
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getCapacity(): Promise<number> {
        try {
            const client = DBConnection.instance.client
            const result = await client.capacity.findFirst({ select: { percentage: true } })
            if (result === null) throw new Error('Cannot find percentage')
            return result.percentage
        } catch (error) {
            console.log(error)
            return 0
        }

    }


    async create(reservation: CreateReservationsDTO): Promise<boolean> {
        try {
            const client = DBConnection.instance.client
            const nextDay = new Date()
            nextDay.setDate(new Date().getDate() + 1)
            const UTCFORMAT = `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`

            reservation.ids_subjects.forEach((id_subject) => {
                client.reservations.create({ data: { reservation_day: UTCFORMAT, id_student: reservation.id, id_subject } })
            })

            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
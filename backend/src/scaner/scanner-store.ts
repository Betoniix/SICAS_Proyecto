import { DBConnection } from "../utils/db-connection"
import { GetReservationsDTO } from "./dto/get-reservations-dto";

export interface IReservation {
    get(reservation: GetReservationsDTO): Promise<boolean | null>
}

export class ScannerStore implements IReservation {
    async get(reservation: GetReservationsDTO): Promise<boolean> {
        try {
            const client = DBConnection.instance.client
            const nextDay = new Date()
            const UTCFORMAT = `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`

            for (const id_subject of reservation.ids_subjects) {
                const result = await client.reservations.findFirst({
                    where: {
                        id_student: reservation.id,
                        id_subject,
                        reservation_day: UTCFORMAT
                    }
                })

                if (result === null) throw new Error('Invalid data')
            }
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}
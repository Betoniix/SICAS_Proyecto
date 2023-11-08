import axios from "axios";
import { EnvLoader } from "../utils/env-loader";
import { Mailer } from "../utils/mailer";
import { WhichToday } from "../utils/today";
import { CreateReservationsDTO } from "./dto/create-reservation-dto";
import { IReservation } from "./reservation-store";
import { writeFile, writeFileSync } from "fs";



export class ReservationService {
    constructor(private readonly reservationStore: IReservation) { }

    async getSubject(id: number) {
        const subscriptions = await this.reservationStore.getSessions(id)
        const persentage = await this.reservationStore.getCapacity()

        const tomorrow = WhichToday(new Date().getDay() + 1)

        if (subscriptions === null) throw new Error('Cannot retrive any subscription')

        const tomorrowSessions = subscriptions.filter((subscription) => {
            const { Hours } = subscription.group.subject
            const matchNextDay = Hours.some((hour) => hour.day.name === tomorrow)
            return matchNextDay
        })

        const availableSpaceSessions = tomorrowSessions.filter(async (validSesion) => {
            const reservatiosnDone = await this.reservationStore.getReservations(validSesion.group.subject.id)
            const finalRoomCapacity = persentage / 100 * validSesion.group.classroom.capacity
            return reservatiosnDone < finalRoomCapacity
        })

        const formatedSessions = availableSpaceSessions.map((validSession) => {
            const { subject, classroom } = validSession.group
            const validHour = validSession.group.subject.Hours.find((hour) => hour.day.name === tomorrow)!

            return {
                id: subject.id,
                name: subject.name,
                start_hour: validHour.start_hour,
                end_hour: validHour.end_hour,
                room: classroom.name
            }
        })

        return formatedSessions
    }

    async createReservation(reservation: CreateReservationsDTO) {
        const mailer = Mailer.instance
        const result = await this.reservationStore.create(reservation)
        const subject = 'Reservacion hecha existosamente'
        const createQRAPI = `${EnvLoader.QR_API}${reservation.id}:${reservation.ids_subjects.join(":")}`
        const qrResult = await axios.get(createQRAPI, { responseType: 'arraybuffer' })
        writeFileSync(`img/A${reservation.id}.png`, Buffer.from(qrResult.data, 'binary'))


        mailer.sendMail(reservation.email, subject, 'codigo QR para acceder', [{ filename: `A${reservation.email}.png`, path: `img/A${reservation.id}.png`, }])

        return result
    }

}
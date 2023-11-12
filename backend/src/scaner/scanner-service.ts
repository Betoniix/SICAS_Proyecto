import { GetReservationsDTO } from "./dto/get-reservations-dto";
import { IReservation } from "./scanner-store";




export class ScannerService {
    constructor(private readonly reservationStore: IReservation) { }


    async validateReservation(reservation: GetReservationsDTO) {
        const isValid = await this.reservationStore.get(reservation)

        if (!isValid) throw new Error('Invalid QR code')

        return isValid
    }

}
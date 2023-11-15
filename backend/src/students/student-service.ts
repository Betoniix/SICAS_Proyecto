import { IStudent } from "./student-store";

export class StudentService {
    constructor(private readonly store: IStudent) { }

    async getIDStudent(id: number) {
        const result = await this.store.get(id)
        if (result === null) throw new Error('Id not found')
        return result
    }

    async ValidateBan(id: number) {
        const result = await this.store.getBan(id)

        if (result === null) throw Error('No ban found')

        return result
    }

    async ValidateReservation(id: number) {
        const result = await this.store.getReservation(id)

        if (result === null) throw Error('No ban found')

        return result
    }

}
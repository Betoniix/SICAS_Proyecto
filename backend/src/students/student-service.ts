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

        const start = new Date(result.start_ban)
        const end = new Date(result.end_ban)
        const current = new Date()
        current.setDate(new Date().getDate() + 1)

        console.log(current >= start && current <= end)
        return (current >= start && current <= end)
    }

    async ValidateReservation(id: number) {
        const result = await this.store.getReservation(id)

        if (result === null) throw Error('No reservation found')

        return result
    }

}
import { DBConnection } from "../utils/db-connection"

export interface IStudent {
    get(id: number): Promise<void | null>
}

export class StudentStore implements IStudent {
    async get(id: number): Promise<void | null> {
        try {
            const client = DBConnection.instance.client
            const result = await client.students.findFirst({ where: { id: id } })

            if (result === null) throw new Error('Student doesnt exist')


        } catch (error) {
            console.log(error)
            return null
        }



    }
}
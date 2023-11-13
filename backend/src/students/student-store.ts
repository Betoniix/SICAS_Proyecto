import { DBConnection } from "../utils/db-connection"

type getRestul = { id: number }

export interface IStudent {
    get(id: number): Promise<getRestul | null>
}

export class StudentStore implements IStudent {
    async get(id: number): Promise<getRestul | null> {
        try {
            const client = DBConnection.instance.client
            console.log(id)
            const result = await client.students.findFirst({ where: { id_user: id } })
            console.log(result)
            if (result === null) throw new Error('Student doesnt exist')
            return result
        } catch (error) {
            console.log(error)
            return null
        }



    }
}
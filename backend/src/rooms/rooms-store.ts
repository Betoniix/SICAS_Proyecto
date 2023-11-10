import { DBConnection } from "../utils/db-connection"
import { CreateClassroomDTO } from "./dto/create-classroom-dto"

export interface IRooms {
    create(createRoom: CreateClassroomDTO): Promise<GetResponse | null>
    update(): Promise<number>
    get(id: number): Promise<GetResponse | null>
    getAll(): Promise<GetResponse[]>
}

const client = DBConnection.instance.client

type GetResponse = {
    id: number;
    name: string;
    capacity: number;
    build: {
        id: number;
        name: string;
    };
}



export class RoomsStore implements IRooms {
    async create(createRoom: CreateClassroomDTO): Promise<GetResponse | null> {
        try {
            const result = await client.classRooms.create({
                data: { capacity: createRoom.capacity, name: createRoom.name, id_build: createRoom.id_build },
                select: { build: true, capacity: true, id: true, name: true }
            })

            if (result === null) throw new Error('Cannont create that room')

            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async update(): Promise<number> {
        try {

        } catch (error) {

        }
        return 0
    }

    async get(id: number): Promise<GetResponse | null> {
        try {
            const result = await client.classRooms.findFirst({ select: { build: true, capacity: true, id: true, name: true }, where: { id: id } })

            if (result === null) throw new Error('Cannot retrive rooms')

            return result
        } catch (error) {
            console.log(error)
            return null
        }


    }
    async getAll(): Promise<GetResponse[]> {
        try {
            const result = await client.classRooms.findMany({ select: { build: true, capacity: true, id: true, name: true } })
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
}
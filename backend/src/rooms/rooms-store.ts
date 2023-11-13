import { DBConnection } from "../utils/db-connection"
import { CreateClassroomDTO } from "./dto/create-classroom-dto"
import { UpdateClassroomDTO } from "./dto/update-classroom-dto"

export interface IRooms {
    create(createRoom: CreateClassroomDTO): Promise<GetRoomResponse | null>
    update(updateDTO: UpdateClassroomDTO): Promise<boolean>
    get(id: number): Promise<GetRoomResponse | null>
    getAll(): Promise<GetRoomResponse[]>
    getAllBuild(): Promise<GetBuildResponse[]>
}

const client = DBConnection.instance.client

type GetBuildResponse = {
    id: number;
    name: string;
}

type GetRoomResponse = {
    id: number;
    name: string;
    capacity: number;
    build: {
        id: number;
        name: string;
    };
}

export class RoomsStore implements IRooms {
    async getAllBuild(): Promise<GetBuildResponse[]> {
        try {
            const result = await client.builds.findMany()
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
    async create(createRoom: CreateClassroomDTO): Promise<GetRoomResponse | null> {
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

    async update(updateDTO: UpdateClassroomDTO): Promise<boolean> {
        try {
            await client.classRooms.update({
                where: { id: updateDTO.id! },
                data: {
                    id_build: updateDTO.id_build,
                    capacity: updateDTO.capacity,
                    name: updateDTO.name
                }
            })
            return true
        } catch (error) {
            console.log(error)
            return false
        }

    }

    async get(id: number): Promise<GetRoomResponse | null> {
        try {
            const result = await client.classRooms.findFirst({ select: { build: true, capacity: true, id: true, name: true }, where: { id: id } })

            if (result === null) throw new Error('Cannot retrive rooms')

            return result
        } catch (error) {
            console.log(error)
            return null
        }


    }
    async getAll(): Promise<GetRoomResponse[]> {
        try {
            const result = await client.classRooms.findMany({ select: { build: true, capacity: true, id: true, name: true } })
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
}
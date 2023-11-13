import { CreateClassroomDTO } from "./dto/create-classroom-dto";
import { UpdateClassroomDTO } from "./dto/update-classroom-dto";
import { IRooms } from "./rooms-store";

export class RoomsService {
    constructor(private readonly store: IRooms) { }

    async updateRoom(update: UpdateClassroomDTO) {
        const isUpdated = await this.store.update(update)

        if (!isUpdated) throw new Error('Cannot update the room')

        return isUpdated
    }

    async GetAllBuild() {
        return await this.store.getAllBuild()
    }

    async getAllRooms() {
        const result = await this.store.getAll()
        return result
    }

    async getRoomByID(id: number) {
        const result = await this.store.get(id)

        if (result === null) throw new Error('Room cant finded')

        return result
    }

    async createRoom(createDTO: CreateClassroomDTO) {
        const result = await this.store.create(createDTO)

        if (result === null) throw new Error('Cannot create the room')

        return result
    }

}
import { ICapacity } from "./capacity-store";

export class LoginService {
    constructor(private readonly capacityStore: ICapacity) { }

    async UpdatePercentage(percentage: number) {
        const result = await this.capacityStore.update(percentage)

        if (result === null) throw new Error(`Cannot update percentage`)

        return result
    }

    async getPercentage() {
        const result = await this.capacityStore.get()

        if (result === null) throw new Error(`Doesnt exist an active percentage`)

        return result
    }
}
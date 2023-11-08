import { Prisma } from "@prisma/client";

export interface ICapacity { update(percentage: number): Promise<number | null>, get(): Promise<number | null> }

export class CapacityStore implements ICapacity {
    constructor(private readonly store: Prisma.CapacityDelegate) { }

    async update(percentage: number): Promise<number | null> {
        try {
            const result = await this.store.update({ data: { percentage: percentage }, where: { id: 1 } })
            return result.percentage
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async get(): Promise<number | null> {
        try {
            const result = await this.store.findFirst({ where: { id: 1 } })
            if (result === null) throw new Error('Something went wrong getting percentage')
            return result.percentage
        } catch (error) {
            console.log(error)
            return null
        }
    }


}
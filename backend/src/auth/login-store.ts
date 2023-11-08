import { Prisma } from "@prisma/client";
import { CredentialsDTO } from "./dto/credentialsDTO";

export interface ILogin { AuthByCredentials(credentials: CredentialsDTO): Promise<AuthResponse | null> }

type AuthResponse = { id: number, role: string }

export class LoginStore implements ILogin {
    constructor(private readonly store: Prisma.UsersDelegate) { }

    async AuthByCredentials(credentials: CredentialsDTO): Promise<AuthResponse | null> {
        try {
            const result = await this.store.findFirst({ where: { email: credentials.email, password: credentials.password }, select: { id: true, role: { select: { name: true } } } })
            if (result === null) throw new Error('User not founded')

            return {
                id: result!.id,
                role: result!.role.name
            }

        } catch (error) {
            console.log(error)
            return null
        }
    }
}
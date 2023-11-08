import { CredentialsDTO } from "./dto/credentialsDTO";
import { ILogin } from "./login-store";

export class LoginService {
    constructor(private readonly loginStore: ILogin) { }

    async auth(credentials: CredentialsDTO) {
        const result = await this.loginStore.AuthByCredentials(credentials)

        if (result === null) throw new Error(`Not user found with credentials`)

        return result
    }


}
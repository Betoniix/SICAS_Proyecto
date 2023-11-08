import { Request, Response } from "express";
import { LoginService } from "./login-service";
import { CredentialsDTO } from "./dto/credentialsDTO";

export class LoginController {
    constructor(private readonly service: LoginService) { }

    async Authenticate(req: Request, res: Response) {
        try {
            const credentials = req.body as CredentialsDTO
            const result = await this.service.auth(credentials)
            res.send({ data: result })
        } catch (error) {
            console.log(error)
            res.status(401).send('User not found')
        }
    }

}
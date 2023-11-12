import { Attachment } from "nodemailer/lib/mailer";
import { EnvLoader } from "./env-loader";
import { SendMailOptions, Transporter, createTransport } from "nodemailer";

export class Mailer {
    private static _instance: Mailer | null = null
    private readonly transporter: Transporter;

    private constructor() {

        this.transporter = createTransport({
            host: EnvLoader.EMAIL_HOST,
            port: Number.parseInt(EnvLoader.EMAIL_PORT!),
            secure: true,
            auth: {
                user: EnvLoader.USER_EMAIL,
                pass: EnvLoader.EMAIL_PASS
            }
        })
    }

    static get instance() {
        if (this._instance === null) {
            this._instance = new Mailer()
        }
        return this._instance
    }

    async sendMail(
        to: string,
        subject: string,
        text: string,
        attachments?: Attachment[]
    ) {
        const message: SendMailOptions = {
            to: to,
            from: EnvLoader.USER_EMAIL,
            subject,
            text,
            attachments
        };

        return await this.transporter.sendMail(message)
    }
}
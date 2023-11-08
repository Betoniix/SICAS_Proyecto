import { PrismaClient } from "@prisma/client";

export class DBConnection {
    private static _instance: DBConnection | null = null
    private _client: PrismaClient

    private constructor() {
        this._client = new PrismaClient()
    }

    static get instance() {
        if (this._instance === null) {
            this._instance = new DBConnection()
        }
        return this._instance
    }

    get client() {
        return this._client
    }
}
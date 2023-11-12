import 'dotenv/config'
import { app } from './app'
import { EnvLoader } from './utils/env-loader'

app.listen(EnvLoader.PORT, () => {
    console.log(`Listening on ${EnvLoader.PORT}`)
})
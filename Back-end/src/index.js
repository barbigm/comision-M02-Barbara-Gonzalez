import { app } from "./app.js"
import { settingDotenvPort } from "./config/dotenv.js"

const {port} = settingDotenvPort() 






app.listen(port, console.log(`Servidor en puerto ${port}`))


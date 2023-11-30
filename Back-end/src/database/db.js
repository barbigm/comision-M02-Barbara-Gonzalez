import mongoose from "mongoose"
import { settingDotenvDB } from "../config/dotenv.js"



const {db} = settingDotenvDB()

export const connectMongo = async () => {
    try {
        await mongoose.connect(db.localhost)
        console.log("Database connected")
    } catch (error) {
        console.log("Error al conectarse a la Base de Datos")
    }
    
}
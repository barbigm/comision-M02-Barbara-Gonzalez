import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connectMongo } from "./database/db.js"


export const app = express();
connectMongo();

app.use(morgan("tiny"))  // tiny es una de las maneras de ver la respuesta de la peticion en la terminal
app.use(cors())

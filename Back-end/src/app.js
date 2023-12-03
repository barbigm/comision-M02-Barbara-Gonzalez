import express from "express"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectMongo } from "./database/db.js"
import { routes } from "./routes/auth.routes.js"


export const app = express();
connectMongo();

app.use(morgan("tiny"))  // tiny es una de las maneras de ver la respuesta de la peticion en la terminal
app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use(routes)
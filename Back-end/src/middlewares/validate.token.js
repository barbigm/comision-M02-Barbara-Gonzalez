import jwt from "jsonwebtoken"
import { settingDotenvSecret } from "../config/dotenv.js"

const {secret} = settingDotenvSecret()

export const authRequired = (req,res,next) => {
    //console.log(req.headers.cookie)
    const {token} = req.cookies
    //console.log(token)
    if (!token) return res.status(400).json({message: "Autorización denegada"})

    jwt.verify(token, secret, (err,user) => {
    if (err) return res.status(403).json({message: "Token inválido"})
    //console.log(user)
    req.user = user
    } )
    
    next()

}
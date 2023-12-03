import jwt from "jsonwebtoken"
import { settingDotenvSecret } from "../config/dotenv.js"

const {secret} = settingDotenvSecret()

export const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload,
         secret,
          {expiresIn: "1h"},
          (err,token)=>{
             if (err) reject(err);
             resolve(token)
            }
        );
    })
}


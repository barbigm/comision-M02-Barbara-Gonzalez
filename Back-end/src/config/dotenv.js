import dotenv from "dotenv"

dotenv.config()

export const settingDotenvPort = () => {
    return {port: process.env.PORT || 4000}
};

export const settingDotenvDB = () => {
    return {db: {
        localhost: process.env.DB_LOCALHOST
    }}
};

export const settingDotenvSecret = () => {
    return { secret: process.env.SECRET_KEY}
}
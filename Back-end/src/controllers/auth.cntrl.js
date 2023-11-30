// Atenticacion del usuario
import User from "../models/user.models.js";

//Registro de usuario
export const register = async (req, res)=> {
    const {username, email, password}= req.body
    try {
       const newUser = new User({
            username,
            email,
            password
        });

        const userSaved = await newUser.save()
        res.status(200).json(userSaved)
    } catch (error) {
        res.status(500).json({message: "Error al registrarse", error})
    }
}


//Login de usuario
export const login = async (req, res)=> {
    
}
// Atenticacion del usuario
import User from "../models/user.models.js";
import bcrypt from "bcrypt"
//import jwt from "jsonwebtoken"    //Para el token forma 1
import { createAccessToken } from "../middlewares/jwt.validator.js";

//Registro de usuario
export const register = async (req, res)=> {
    const {username, email, password}= req.body

    try {
        //encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10)
       const newUser = new User({
            username,
            email,
            password: passwordHash
        });

       const userSaved = await newUser.save(); 
       //Generamos el token usando el id del usersaved
       //Token forma 1
       // jwt.sign({id: userSaved._id},
       //     "secret123",
       //     {expiresIn: "10h"},
       //     (err,token)=>{
       //         if (err) console.log(err)
       //         res.cookie("token", token)
       //         res.json(userSaved)
       //     })

        //Token forma 2 con middleware
        const token = await createAccessToken({id: userSaved._id})
        res.cookie("token",token)
        res.json({message: "Usuario creado con éxito",id: userSaved.id,username: userSaved.username,email: userSaved.email})
        
        
    } catch (error) {
        res.status(500).json({message: "Error al registrarse", error})
    }
}

//Login y logout de usuario
export const login = async (req, res)=> {
    const {email, password} = req.body;

    try {
        
        const userFound = await User.findOne({email})
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

       const match = await bcrypt.compare(password, userFound.password)
       if (!match) return res.status(400).json({message: "Contraseña incorrecta"})

       //Debemos generar el token nuevamente
       const token = await createAccessToken({id: userFound._id})
       res.cookie("token",token)
       res.json({message: "Bienvenido",username: userFound.username})
       
    } catch (error) {
        res.status(500).json({message: "Error al Loguearse", error})

    }
}

export const logout = async (req, res)=> {
    res.cookie("token", "", { expires: new Date(0)})
    return res.status(200).json({message: "Hasta luego!"})
    }

//Perfil
export const profile = async (req, res) => {
    try {
       const userFound = await User.findById(req.user.id)
       if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

       res.status(200).json({message: "Perfil",username: userFound.username, email: userFound.email})
    } catch (error) {
        res.status(500).json({message: "Error en el perfil", error})
    }
}
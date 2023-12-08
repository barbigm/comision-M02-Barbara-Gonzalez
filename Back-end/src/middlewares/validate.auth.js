// Validación de la autenticación del usuario

import {body, validationResult} from "express-validator"

// VALIDAMOS EL REGISTER
export const validateRegister = [
    body("username").notEmpty().withMessage("El nombre de Usuario es requerido").isLength({min: 4}).withMessage("Debe tener la menos 4 caracteres"),

    body("email").isEmail().withMessage("Ingrese un email válido").notEmpty().withMessage("El email es requerido"),


    body("password").notEmpty().withMessage("El password es requerido").isLength({min: 6}).withMessage("El password debe tener mínimo 6 caracteres")
]

// VALIDAMOS EL LOGIN
export const validateLogin = [
        body("email").isEmail().withMessage("Ingrese un email válido").notEmpty().withMessage("El email es requerido"),


        body("password").notEmpty().withMessage("El password es requerido").isLength({min: 6}).withMessage("El password debe tener mínimo 6 caracteres")
]

// VALIDAMOS EL ERROR
export const handleErrorValidations = (req, res, next) => {
    const err = validationResult(req)

    if (!err.isEmpty()) {
        return res.status(400).json(err)
        //return res.json(404,{message: "Error en la validación de atributos"}) //De esta manera funciona, si hago res.status(400).json({message:)}) no funciona
    }
    next()
}



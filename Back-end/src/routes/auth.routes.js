// Endpoints del servidor
import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.cntrl.js";
import { authRequired } from "../middlewares/validate.token.js";
import { validateLogin, validateRegister, handleErrorValidations } from "../middlewares/validate.auth.js"; 

export const routes = Router();

// Rutas para el registro de usuario
routes.post("/register", validateRegister, handleErrorValidations, register)

// Rutas para el login
routes.post("/login", validateLogin, handleErrorValidations, login)

// Rutas para el logout
routes.post("/logout", logout)

// Ruta para el perfil
routes.get("/profile",authRequired,profile);
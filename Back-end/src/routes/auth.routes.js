// Endpoints del servidor
import { Router } from "express";
import { login, profile, register } from "../controllers/auth.cntrl.js";
import { authRequired } from "../middlewares/validate.token.js";

export const routes = Router();

// Rutas para el registro de usuario
routes.post("/register", register)

// Rutas para el login
routes.post("/login", login)

// Ruta para el perfil
routes.get("/profile",authRequired,profile);
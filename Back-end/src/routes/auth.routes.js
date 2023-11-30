// Endpoints del servidor
import { Router } from "express";
import { login, register } from "../controllers/auth.cntrl.js";

export const routes = Router();

// Rutas para el registro de usuario
routes.post("/register", register)

// Rutas para el login
routes.post("/login", login)
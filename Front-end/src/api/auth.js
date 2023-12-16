// Pedidos al servidor

import axios from "./setCredentials"  //si bien esta con 'export default intance', aca le cambio el nombre a axios


//Registrarse
export const registerReq = (user)=> axios.post("/register", user)

//Loguearse
export const loginReq = (user)=> axios.post("/login", user)

// Verificamos el token desde al Back-end
export const verifyToken = ()=> axios.get("/verifyToken")


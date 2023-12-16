import { createContext, useContext, useEffect, useState } from "react";
import { loginReq, registerReq, verifyToken } from "../api/auth";
import Cookies from "js-cookie"

export const AuthContext = createContext()

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (!context) throw new Error("Error en el contexto del usuario")
    return context
}

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    // Booleano para la autenticacion de credenciales
    const [isAuth,setIsAuth] = useState(false)
    
    //Manejo de los estados de errores
    const  [errors, setErrors] = useState([])
    
    
    // Registro del usuario
    const signup = async(user)=>{
        try {
          const res = await registerReq(user)
          console.log(res.data)
          setUser(res.data)
          setIsAuth(true)
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    }
    
    // Login de usuario
    const signin = async(user)=>{
        try {
            const res = await loginReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    }
    
    // Logout (Cerrar sesión)
    const signout = ()=>{
        Cookies.remove("token")
        setIsAuth(false)
        setUser(null)
    }



    // Manejo de errores
    useEffect(()=>{
        if(errors.length > 0 ){
            const timer = setTimeout(()=>{
            setErrors([])},3000)
            return()=> clearTimeout(timer)
        }
    },[errors])

    // Manejo de cookies
    useEffect(()=>{
        async function verifyLogin(){
            const cookie = Cookies.get()
            if (cookie.token) {
                try {
                 const res = await verifyToken(cookie.token)
                if (res.data) {
                    setIsAuth(true)
                    setUser(res.data)
                } else {
                    setIsAuth(false)
                }
                } catch (error) {
                    setIsAuth(false)
                    setUser(null)
                }
            }
        }
        verifyLogin()
    },[])

    return (

        <AuthContext.Provider value={{
            signup, 
            signin,
            signout, 
            isAuth, 
            user,
            errors }}>
            {children}

        </AuthContext.Provider>
    )
}
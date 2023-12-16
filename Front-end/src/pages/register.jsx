import {useForm} from "react-hook-form"
//import { registerReq } from "../api/auth"
import { useAuth } from "../context/auth.context"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import NavbarPublic from "../components/Navbar.public"

export const Register = ()=>{
    const {register, handleSubmit, formState:{errors} } = useForm()

    const {signup, isAuth, errors:registerErrors} = useAuth()

    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuth) navigate("/profile")
    },[isAuth])


    const onSubmit = handleSubmit(async(values)=>{
        // Conexion al servidor y enviar el usuario
        //const res = await registerReq(values)
        //console.log(res)
        
        signup(values)
    })

    
    return (

    <>
    <NavbarPublic/>
        
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-900 max-w-md p-16 rounded-md">
             <form action="">
                <h1 className="text-3xl text-center text-white font-semibold mb-10">Registro de Usuario</h1>
                {registerErrors.map((err,i)=>(    // mapea el arreglo (array) de los errores
                    <div key={i} className="text-white">{err}</div>
                ))}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="text" placeholder=" Usuario" {...register("username",{required:true})}/>
                {errors.username && (<p className="text-red-400">Ingrese un nombre de usuario </p>)}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="email" placeholder=" Email" {...register("email",{required:true})}/>
                {errors.email && (<p className="text-red-400">Ingrese un email válido </p>)}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="password" placeholder=" Contraseña" {...register("password",{required:true})}/>
                {errors.password && (<p className="text-red-400">Ingrese una contraseña </p>)}
                <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white my-3">Registrarse</button>
             </form>
             <p className="flex justify-between text-white mt-10">¿Ya estás registrado? <Link to="/login" className="font-bold"> Ingresar </Link></p>
            </div>
        </div>
    
    </>
    
    
)}


// registerReq esta comentado porque se utilizo cuando no funcionaba useAuth
import {useForm} from "react-hook-form"  //es de top level
import { useAuth } from "../context/auth.context" //es de top level
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import NavbarPublic from "../components/Navbar.public"

export const Login = ()=>{
    const {register, handleSubmit, formState:{errors} } = useForm()
    const {signin, isAuth, errors:loginErrors} = useAuth()

    // Efecto para que se redireccione al Perfil
    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuth) navigate("/profile")
    },[isAuth])

    const onSubmit = handleSubmit(async(values)=>{
        // Conexion al servidor y enviar el usuario
        console.log(values)
        //const res = await registerReq(values)
        //console.log(res)
        //esto viene del authContext
        signin(values)
    })

    
    return (
    <>
    <NavbarPublic/>
    
    
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-900 max-w-md p-8 rounded-md">
             <form action="">
                <h1 className="text-3xl text-center text-white font-semibold mb-5">Ingresar</h1>
                {loginErrors.map((err,i)=>(    // mapea el arreglo (array) de los errores
                    <div key={i} className="text-white">{err}</div>
                    ))}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="email" placeholder=" Email" {...register("email",{required:true})}/>
                {errors.email && (<p className="text-red-400">Ingrese su email </p>)}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" type="password" placeholder=" Contraseña" {...register("password",{required:true})}/>
                {errors.password && (<p className="text-red-400">Ingrese su contraseña </p>)}
                <button onClick={onSubmit} className="h-10 px-6 font-semibold text-white rounded-md bg-blue-500 text-white my-3">Ingresar</button>
             </form>
             <p className="flex justify-between text-white mt-10">¿No estás registrado? <Link to="/register" className="font-bold text-white"> Registrarse </Link></p>
            </div>
        </div>
         
    </>
   
    
)}


// registerReq esta comentado porque se utilizo cuando no funcionaba useAuth
import NavbarPrivate from "../components/Navbar.private"
import { useForm } from "react-hook-form"
import { usePost } from "../context/post.context"

export const PostFormPage = ()=>{

    const {register, handleSubmit} = useForm()
    const { createPost } = usePost()
    const onSubmit = handleSubmit((data)=>{
        createPost(data)
    })
    return (
    <>
        <NavbarPrivate/>
        <p className="py-10 text-center font-semibold text-gray-800 text-3xl text-white">CREAR POST</p>

        {/* Formulario para agregar post */}
    <div className="flex  items-center justify-center">
        <form onSubmit={onSubmit}>
            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            placeholder="Título"
            {...register("title")}
            autoFocus />
            <textarea className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3" placeholder="Descripción"
            {...register("description")}></textarea>

            <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"  placeholder="Imagen"
            {...register("imageURL")}></input>

            <button className="flex h-6 px-6 font-semibold rounded-md bg-green-900 text-white my-2" type="submit" onClick={onSubmit}>
                Subir
            </button>

        </form>
    </div>
    </>
    )
}
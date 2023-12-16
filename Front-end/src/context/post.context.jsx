import { createContext, useContext, useState } from "react";
import { createPostReq, getPostByIdReq, getPostReq, updatePostReq, deletePostReq } from "../api/postAxios";

const PostContext = createContext()
export const usePost = () => {
    const context = useContext(PostContext)
    if (!context) throw new Error("Error en el contexto de los post")
    return context
}

export const PostProvider = ({children}) => {
    const {post, setPost} = useState([])

// 1) Crear post

    const createPost = async(post)=>{
        //console.log(post) 
        const res = await createPostReq(post)
        setPost(res.post)
    }

    return(
        <PostContext.Provider value={{
            createPost,
            post,getPostByIdReq,
            getPostReq,deletePostReq,updatePostReq
        }}>

        {children}

        </PostContext.Provider>

    )
}


import Post from "../models/post.model.js"

//TODO Buscar todos los post
export const getAllPost = async(req, res) => {
    try {
       const allPost = await Post.find({
        user: req.user.id
       }).populate("user")
       res.status(200).json(allPost)
    } catch (error) {
        return res.status(400).json({message: "No se enontraron post"})
    }
}

//TODO Buscar post por ID
export const getPostById = async(req, res) => {
    const {id} = req.params

    try {
        const postFoundById = await Post.findById(id)
        if (!postFoundById) return res.status(404).json({message: "Post no encontrado"})

        res.status(200).json(postFoundById)
    } catch (error) {
        return res.status(400).json({message: "Error al buscar el post"})

    }
}

//TODO Crear post
export const createPost = async(req, res) => {
    const {title, description} = req.body

    try {
       const newPost = new Post({
            title,
            description,
            author: req.user,
            user: req.user.id
        })

        const postSaved = await newPost.save()
        res.status(200).json(postSaved)

    } catch (error) {
        return res.status(400).json({message: "Error al crear el post"})
    }
}

//TODO Actualizar post
export const updatePost = async(req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true}).populate("user")

        if (!updatedPost) return res.status(404).json({message: "Post no encontrado"})

        res.status(200).json(updatedPost)

    } catch (error) {
        return res.status(400).json({message: "Error al actualizar el post"})

    }
}

//TODO Eliminar post
export const deletePost = async(req, res) => {
    try {
       const deletedPost = await Post.findByIdAndDelete(re.params.id)

       if (!deletedPost) return res.status(404).json({message: "Post no encontrado"})

       res.status(200).json({message: "Tarea elimanda"})
    } catch (error) {
        return res.status(400).json({message: "Error al eliminar el post"})

    }
}

import axios from "./setCredentials"  //si bien esta con 'export default intance', aca le cambio el nombre a axios

export const getPostReq = () => axios.get("/profile")

export const getPostByIdReq = (id) => axios.get(`/post/${id}`)

export const createPostReq = (post) => axios.post("/createpost", post)

export const updatePostReq = (id, post) => axios.put(`/post/${id}`, post)

export const deletePostReq = (id) => axios.delete(`/post/${id}`)
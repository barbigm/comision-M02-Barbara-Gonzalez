import { Router} from "express";
import { authRequired } from "../middlewares/validate.token.js";
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/post.cntrl.js";

export const postRoutes = Router()

postRoutes.get("/post", authRequired, getAllPost)
postRoutes.get("/post/:id", authRequired, getPostById)
postRoutes.post("/post", authRequired, createPost)
postRoutes.put("/post/:id", authRequired, updatePost)
postRoutes.delete("/post/:id", authRequired, deletePost)

//export default routes;authRequired
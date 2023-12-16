import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/auth.context.jsx"
import { PrivateRoutes } from "./routes/Private.routes.jsx"

import { Register } from "./pages/register.jsx"
import { Login } from "./pages/login.jsx"
import { Homepage } from "./pages/homepage.jsx"
import { Profilepage } from "./pages/profilepage.jsx"
import { Createpost } from "./pages/createpost.jsx"
import { PostProvider } from "./context/post.context.jsx"
import { PostFormPage } from "./pages/PostFormPage.jsx"

export const App = () => {

  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <Routes>
            <Route path = "/" element = {<Homepage/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Register/>}/>

            <Route element={<PrivateRoutes />}> 
              <Route path = "/profile" element = {<Profilepage/>}/>
              <Route path = "/createpost" element = {<PostFormPage/>}/>
              <Route path = "/post/:id" element = {<Createpost/>}/>

             </Route>     
          </Routes>
        </Router>
     </PostProvider>
    </AuthProvider>
  )
}

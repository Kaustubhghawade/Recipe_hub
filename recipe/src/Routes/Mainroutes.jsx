import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes  from "../pages/Recipes"
import About  from "../pages/About"
import CreateRecipe from"../pages/CreateRecipe"
import SingleRecipe from "../pages/SingleRecipe"
import PageNotFound from "../pages/PageNotFound"
import Fav from "../pages/Fav"

const Mainroutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/recipes/details/:id" element={<SingleRecipe/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/createRecipe" element={<CreateRecipe/>}/>
    <Route path="/Fav" element={<Fav/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Mainroutes

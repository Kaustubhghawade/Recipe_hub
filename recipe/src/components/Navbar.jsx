import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-x-15 text-sm mb-10">
      <NavLink className={(e) => e.isActive && "text-red-400"} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => e.isActive && "text-red-400"} to="/recipes">
        Recipe
      </NavLink>
      <NavLink className={(e) => e.isActive && "text-red-400"} to="/about">
        About Us
      </NavLink>
      <NavLink className={(e) => e.isActive && "text-red-400"} 
      to="/createRecipe">
        Create Recipes
      </NavLink>
      <NavLink className={(e) => e.isActive && "text-red-400"} 
      to="/Fav">
        Favourite
      </NavLink>
    </div>
  );
};

export default Navbar;

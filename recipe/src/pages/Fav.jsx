import RecipeCard from "../components/Recipecard"
import { useContext } from "react";
import{RecipeContext} from "../context/RecipeContext"

const Fav = () => {
 const favroite= JSON.parse(localStorage.getItem("fav")||[]);

  const renderrecipe = favroite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {favroite.length > 0 ? renderrecipe : "may you didnt Like any thing yet"}
    </div>
  );
};

export default Fav

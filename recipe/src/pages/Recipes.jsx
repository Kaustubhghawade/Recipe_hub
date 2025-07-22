import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/Recipecard";

const Recipes = () => {
  const { data } = useContext(RecipeContext);

  const renderrecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.length > 0 ? renderrecipe : "No recipe found"}
    </div>
  );
};

export default Recipes;

import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);

    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));

    toast.success("Recipe created", { autoClose: 700 });
    reset();
    navigate("/recipe");
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className=" block border-b outline-0 p-3  "
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
      />
      <small className="text-red-800">Error if occured</small>
      <input
        className=" block border-b outline-0 p-3  "
        {...register("title")}
        type="text"
        placeholder="Recipe Tital"
      />
      <input
        className=" block border-b outline-0 p-3  "
        {...register("chefname")}
        type="text"
        placeholder="chef name"
      />
      <small className="text-red-800">Error if occured</small>
      <textarea
        className=" block border-b outline-0 p-3  "
        {...register("description")}
        type="text"
        placeholder="Start here"
      ></textarea>
      <small className="text-red-800">Error if occured</small>
      <textarea
        className=" block border-b outline-0 p-3  "
        {...register("ingridiants")}
        type="text"
        placeholder="Write ingridianr sperated by comma "
      ></textarea>
      <small className="text-red-800">Error if occured</small>

      <select
        className=" block border-b outline-0 p-3  "
        {...register("Catagoris")}
        type="text"
      >
        <option value="Cat1">Fast food</option>
        <option value="Cat2">desserts</option>
        <option value="Cat3">entrees</option>
        <option value="Cat4">appetizers</option>
      </select>
      <small className="text-red-800">Error if occured</small>
      <button
        className="block bg-gray-600 mt-5 px-4py2
    rounded"
      >
        Create Recipe
      </button>
    </form>
  );
};

export default CreateRecipe;

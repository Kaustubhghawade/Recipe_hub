import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  
  const { data, setdata } = useContext(RecipeContext); 
   const navigate = useNavigate();
   const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  
  
  const { register, handleSubmit, reset } = useForm( {
    defaultValues:{
        title:recipe?.title,
        chef:recipe?.chefname,
        image:recipe?.image,
        description:recipe?.description,
        ingridiant:recipe?.ingridiant

    }
  });
  const SubmitHandler = (recipe) => {

    const index=data.findIndex((recipe)=> params.id == recipe.id);
    const copydata = [...data];
    copydata[index]={...copydata[index],...recipe}
  setdata(copydata);
  localStorage.setItem("recipes",JSON.stringify(copydata));
  toast.success("Recipe Updatded",{autoClose:600})
  
  };
 const DeleteHandler = () => {
    const filterdata = data.filter((r)=> r.id != params.id)
      setdata(filterdata) ;
      localStorage.setItem("recipes",JSON.stringify(filterdata));
      toast.success("Recipe Deleted")
      navigate("./recipes")
}


 const[favourite,setfavroite]= useState( 
  JSON.parse(localStorage.getItem("fav")) || [])

  
const FavHandler=()=>{
  let copyfav = [...favourite];
    copyfav.push(recipe);
    setfavroite(copyfav)
  localStorage.setItem("fav",JSON.stringify(copyfav));
  
}
const unFavHandler=()=>{
  const filterfav = favourite.filter(f=> f.id != recipe?.id);
  setfavroite(filterfav)
  localStorage.setItem("fav",JSON.stringify(filterfav));

}

useEffect(()=>{
  console.log("sing recp mounted");
  return ()=>{
    console.log("unmounted");
    
  }
  
},[favourite])
  return recipe ? (
    <div className="w-full flex">
     
      <div className="left w-1/2 p-2">
      {favourite.find((f) => f.id == recipe?.id )?(<i onClick={unFavHandler} className=" right-[10%] absolute text-3xl text-red-400 ri-heart-fill"></i>):<i onClick={FavHandler} className="right-[10%] absolute text-3xl text-red-400 ri-heart-2-line"></i> }
         
      
        <h1 className=" text-5xl text-red-300 font-black ">{recipe.title}</h1>

        <img className="h-[40vh] rounded-2xl transition duration-300 ease-in-out hover:scale-105" src={recipe.image} alt="" />

        <h1 className="font-black text-red-100"> BY~{recipe.chefname}</h1>
        <h2>{recipe.description}</h2>
      </div>
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
          <option value="Fast food">Fast food</option>
          <option value="desserts">desserts</option>
          <option value="dinner">dinner</option>
          <option value="appetizers">appetizers</option>
        </select>
        <small className="text-red-800">Error if occured</small>
       <div className=" flex gap-5"> <button
          className="block bg-blue-600 mt-5 px-4py2
    rounded-full"
        >
          Update Recipe
        </button>
        <button onClick={DeleteHandler}
          className="block bg-red-600 mt-5 px-4py2
    rounded-3xl"
        >
          Delete Recipe
        </button></div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;

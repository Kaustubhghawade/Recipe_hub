import { createContext, useEffect, useState } from "react";

// Context name
export const RecipeContext = createContext(null);

// Component name
const RecipeProvider = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  console.log(data);

  return (
    <RecipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

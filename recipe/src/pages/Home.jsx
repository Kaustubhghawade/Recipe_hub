
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
      
  }catch (error){
    console.log(error);
  } 
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Home;

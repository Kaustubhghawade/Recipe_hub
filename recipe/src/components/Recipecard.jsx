import { Link } from "react-router-dom";

const Recipecard = (props) => {
  const { image, title, description, chefname, id } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-[160px] sm:w-[180px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover"
      />
      <div className="p-2">
        <h1 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h1>
        <p className="text-xs text-gray-500 truncate">by {chefname}</p>
        <p className="text-xs text-gray-700 line-clamp-2">
          {description.slice(0, 60)}...
          <span className="text-blue-500 cursor-pointer"> more</span>
        </p>
      </div>
    </Link>
  );
};

export default Recipecard;
 
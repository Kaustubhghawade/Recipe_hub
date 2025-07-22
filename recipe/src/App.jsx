import Mainroutes from "./Routes/Mainroutes"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="w-screen h-screen text-white font-thin bg-gray-800 py-7 px-[10%]">
     <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App

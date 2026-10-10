import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { CollectionPages } from "./pages/CollectionPages";
import { NavBar } from "./component/NavBar";
 import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-900 text-white">
      <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}>Home</Route>
      <Route path="/collection" element={<CollectionPages/>}>Collection</Route>
    </Routes>
      
      <ToastContainer />

    </div>
  );
};

export default App;
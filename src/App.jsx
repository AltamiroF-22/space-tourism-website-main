import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div >
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default App;

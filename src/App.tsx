import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

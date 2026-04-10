import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="min-h-screen flex justify-center overflow-hidden">
        <p className="text-[40px] font-['Outfit'] font-semibold">
          Page not found. <br /> 404
        </p>
      </div>
    </>
  );
}

export default NotFound;

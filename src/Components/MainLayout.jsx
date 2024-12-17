import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[76vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

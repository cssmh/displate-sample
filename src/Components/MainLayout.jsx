import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const loc = useLocation();
  const noNavFooter = loc.pathname === "/auth/signin";
  return (
    <div>
      {!noNavFooter && <Navbar />}
      {/* <div className="min-h-[76vh]"> */}
      <Outlet />
      {/* </div> */}
      {!noNavFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

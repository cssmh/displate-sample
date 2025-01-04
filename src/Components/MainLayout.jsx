import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const loc = useLocation();
  const noNavFooter =
    loc.pathname === "/auth/signin" ||
    loc.pathname === "/auth/signin/register-user";

  return (
    <div>
      {!noNavFooter && <Navbar />}
      <div className="min-h-[60vh]">
      <Outlet />
      </div>
      {!noNavFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/navbar/Navbar";

const Routes = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="bg-slate-300">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Routes;

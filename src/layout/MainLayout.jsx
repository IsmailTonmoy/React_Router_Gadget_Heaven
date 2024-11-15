import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

 const MainLayout = () => {
    return (
    <div>
        <Navbar/>
        <div className="min-h-[calc(100vh-261px)] ">
        <Outlet/>
        </div>
        <Footer/>

    </div>
    );
  }

  export default MainLayout
import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
   return(
      <div className={`navbar ${isHomePage?"bg-[#9538E2]": "bg-base-100"}`}>
      <div className="navbar-start">
        
        <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold">
        <Link to= '/'>Home</Link>
        <Link to= '/statistics'>Statistics</Link>
        <Link to= '/dashboard'>Dashboard</Link>
        <Link to="about">About Us</Link>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <Link to="dashboard/cart" className="bg-white text-black border rounded-full text-xl"><CiShoppingCart /></Link>
        <Link to="dashboard/wishlist" className="bg-white text-black border rounded-full text-xl"><CiHeart /></Link>
      </div>
      
    </div>
   );
};

export default Navbar;

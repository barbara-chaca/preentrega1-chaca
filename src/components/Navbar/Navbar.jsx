import "./navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { CartWidget } from "../CartWidget/CartWidget";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>  
      <>      
        <div className="navbarContainer">
          <Link to="/">
            <img src="https://res.cloudinary.com/dbo7c3awi/image/upload/v1718601823/logo_ht7188.png" />
          </Link>
          

          <div className="categories">
            <ul>
              <li> VAJILLA </li>
              <li> DECORACIÓN </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </>
      <Outlet />
    </div>
  );
};

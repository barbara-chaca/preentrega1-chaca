import "./navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img src="https://res.cloudinary.com/dbo7c3awi/image/upload/v1718601823/logo_ht7188.png" />

      <div className="categories">
        <ul>
          <li> VAJILLA </li>
          <li> DECORACIÓN </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

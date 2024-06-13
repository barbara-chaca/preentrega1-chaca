import "./navbar.css";
import { LuShoppingCart } from "react-icons/lu";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img src="../../../../images/logo.png" alt="logo" />

      <div className="categories">
        <ul>
          <li> Vajilla </li>
          <li> Decoración </li>
        </ul>
      </div>

      <div className="cart">
        <LuShoppingCart size={60} />
        <span>0</span>
      </div>
    </div>
  );
};

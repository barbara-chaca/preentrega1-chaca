import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dbo7c3awi/image/upload/v1718601823/logo_ht7188.png"
            />
          </Link>

          <div className="categories">
            <Button
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: '#A9B388',
                color: 'black',
                borderColor: '#A9B388',
                '&:hover': {
                  backgroundColor: '#99a576',
                  borderColor: '#99a576'
                }
              }}
            >
              <Link to="/category/Vajilla"> VAJILLA </Link>
            </Button>
            <Button
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: '#A9B388',
                color: 'black',
                borderColor: '#A9B388',
                '&:hover': {
                  backgroundColor: '#99a576',
                  borderColor: '#99a576'
                }
              }}
            >
              <Link to="/category/Decoración"> DECORACIÓN </Link>
            </Button>
          </div>
          <div>
            <CartWidget/>
          </div>

        </div>
      </>
      <Outlet />
    </div>
  );
};

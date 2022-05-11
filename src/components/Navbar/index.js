//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements"; 
import Image from '../../images/idkcat.jpg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/artists" activeStyle>
            Artist pages
          </NavLink>
          <NavLink to="/comments" activeStyle>
            Comments
          </NavLink>
          <NavLink to="/list" activeStyle>
            Ranking
          </NavLink>
          <NavLink to="/about" activeStyle>
            About us!
          </NavLink>
          <NavLink to="/login" activeStyle>
            Sign In
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
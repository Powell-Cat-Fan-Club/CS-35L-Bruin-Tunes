//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from "react";
import { Nav, NavLink, NavMenu, Logo } 
    from "./NavbarElements"; 
import Image from '../../images/cat.png'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <Logo src={Image} alt="logo"/>
            BruinTunes
          </NavLink>
        </NavMenu>

        <NavMenu style={{marginLeft:"auto"}}>
          <NavLink to="/artists" activeStyle>
            Artist pages
          </NavLink>
          <NavLink to="/comments" activeStyle>
            Comments
          </NavLink>
          <NavLink to="/charts" activeStyle>
            Charts
          </NavLink>
          <NavLink to="/userlist" activeStyle>
            Lists
          </NavLink>
          <NavLink to="/about" activeStyle>
            About us!
          </NavLink>
          <NavLink to="/login" activeStyle>
            <button>Sign In</button>
          </NavLink>

        </NavMenu>
      </Nav>
    </div>
  );
};
  
export default Navbar;
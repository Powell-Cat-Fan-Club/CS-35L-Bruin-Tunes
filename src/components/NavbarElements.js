//credit for the base for responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: #2774AE;
  
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: stretch;
  padding-left: 1%;
`;

export const RightContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  padding-right: 1%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  /*font-size: x-large;  not set */
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  text-align: center;

  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkLogo = styled(Link)`
  color: white;
  /*font-size: x-large;  not set */
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: center;
  margin: 10px;
`;

export const Logo = styled.img`
  height: 100%;
  width: auto;
`;

export const OpenLinksButton = styled.button`
  height: 100%;
  width: auto;

  background: none;
  border: none;
  padding: 0 1rem;
  
  color: white;
  font-size: 3rem;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  @media (min-width: 700px) {
    display: none;
  }
`;
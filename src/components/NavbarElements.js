//credit for the base for responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { DivContainer, NavContainer } from "../style"

export const NavbarContainer = styled(NavContainer)`
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: #2774AE;

  @media (min-width: 801px) {
    height: 80px;
  }
`;

export const LeftContainer = styled(DivContainer)`
  flex: 30%;
  align-items: stretch;
`;

export const RightContainer = styled(LeftContainer)`
  flex: 70%;
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled(DivContainer)`
  width: 100%;
  height: 80px;
`;

export const NavbarLogo = styled(Link)`
  color: white;
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  text-align: right;
  
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  height: 100%;
  cursor: pointer;
`;

export const NavbarLink = styled(NavbarLogo)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-align: center;

  padding: 0 1rem;

  &:hover {
    background-color: #e6007e;
  }
  &:active{
    background-color: #e6007e;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;


export const NavbarLinkExtended = styled(NavbarLink)`
  font-size: x-large;
  display: flex;
  margin: 10px 0;
`;

export const Logo = styled.img`
  height: 80%;
  width: auto;
`;

export const OpenLinksButton = styled.button`
  height: 100%;
  width: auto;

  background: none;
  border: none;
  margin-right: 1rem;
  
  color: white;
  font-size: 3rem;
  cursor: pointer;
  @media (min-width: 801px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled(NavContainer)`
  height: auto;
  align-items: center;
  @media (min-width: 801px) {
    display: none;
  }
`;
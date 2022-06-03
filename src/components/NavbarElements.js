/***************************************************************************
*    Citation 1
*    Title: styled-components-responsive-navbar
*    Author: machadop1407
*    Date: 2021
*    Availability: https://github.com/machadop1407/styled-components-responsive-navbar
*    Usage: Base for responsive navbar
***************************************************************************
*    Citation 2
*    Title: How to create a multi-page website using React.js ?
*    Author: namanjaingeeksforgeeks
*    Date: 2022
*    Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
*    Usage: Parts of the navbar
****************************************************************************/
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { DivContainer, NavContainer } from "../style"

export const NavbarContainer = styled(NavContainer)`
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: #0F4C75;

  @media (min-width: 901px) {
    height: 80px;
  }
`;

export const LeftContainer = styled(DivContainer)`
  align-items: stretch;
`;

export const RightContainer = styled(LeftContainer)`
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled(DivContainer)`
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;

export const NavbarLogo = styled(Link)`
  color: white;
  font-size: 3.2rem;
  font-family: 'Secular One', Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: right;
  
  display: flex;
  align-items: center;
  padding: 0px .5rem;
  margin: 0px;
  height: 100%;
  cursor: pointer;
`;

export const NavbarLink = styled(NavbarLogo)`
  color: white;
  font-size: 1rem;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif; /* not set */
  text-align: center;

  padding: 0 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavbarLink)`
  font-size: 1rem;
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
  margin: 0px 1rem;
  
  color: white;
  font-size: 3rem;
  cursor: pointer;
  @media (min-width: 901px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled(NavContainer)`
  height: auto;
  align-items: center;
  @media (min-width: 901px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
    color: #0F4C75;
    font-size: 1rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .3rem;
    align-items: center;
    margin: .5rem 0px; 

    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;

    &:hover {
      background-color: #5C9FCC;
    }
`
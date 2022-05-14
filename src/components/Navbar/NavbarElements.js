//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #2774AE;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem;
  z-index: 12;
`;

/*
background - color of background
height - height of bar
display - change how it can be seen (KEEP AS FLEX)
justify-content - changes where the contents are in box
padding - amount of space btwn content and border
  first - top and bottom are this size (is 17px)
  second - sides are this size
z-index - determines what is shown in front of others 
  (a higher num is more on top)

note rem changes with size
vw does not
*/

export const NavLink = styled(Link)`
  color: #FFFFFF;
  display: flex;
  /*width: 100%;*/
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFD100;
  }
`;

/*
color - changes the color of other text
aligin-items - change where the items are heightwise
text-decoration - does the underline/strikethrough stuff
padding - padding
  0 - adds 0 to the top and both of the elemtn
  1rem - changes the space btween each element
height% - determines how tall the element is
  -100% determines that it is as tall as the block
cursor - when hover over, show what type of cursor it is 

&.active - when clicked on, do something
  - color: is the color of the element of the clicked
*/  


export const Bars = styled(FaBars)`
  display: none;
  color: #FFFFFF;
  @media screen and (max-width: false) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /*margin-right: -24px;*/
  /* width: 100vw;*/
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw; 
  white-space: nowrap; */
  @media screen and (max-width: false) {
    display: none;
  }
`;


export const Logo = styled.img`
  display: flex;
  height: 85%;
  width: auto;
`;

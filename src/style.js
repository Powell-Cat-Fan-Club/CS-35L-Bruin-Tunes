import styled from 'styled-components';

export const Header = styled.h1`
    color: #000;
    font-size: 60px;
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white,-2px -2px white, 2px 2px white, 2px -2px white, -2px 2px white;
    text-align: center;
    line-height: 63px;
    margin: 0px 3.5rem;    
`
export const DivContainer = styled.div`
    overflow-x: hidden; 
    display: flex;
`
export const NavContainer = styled.nav`
    overflow-x: hidden; 
    display: flex;
    flex-direction: column;
`
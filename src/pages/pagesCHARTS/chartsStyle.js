import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"
import { DivContainer as Container} from "../../style";

export const DivContainer = styled(Container)`
    flex-direction: column;
`

export const NavLink = styled(Link)`
    color: Black;
    font-size: xx-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    margin: 0px;
`

export const RankList = styled.ol`
color: #000;
    font-size: Large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: inherit;
    margin: 0px;
`
export const RankItem = styled.li`
    margin: 1rem -0.75rem 1rem 0px;
    background-color: none;
`

export const ArtistDescription = styled.p`
    color: #000;
    font-size: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    margin: 0px;
`
export const GenreList = styled.ul`
    margin: 0px;
`
export const GenreItem = styled.li`
    margin-left: -0.75rem;
`
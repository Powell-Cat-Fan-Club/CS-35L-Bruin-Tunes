import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { DivContainer, Header } from '../../style';

export const ArtContainer = styled.div`
    display: flex;
    height: 90vh;
    align-items: stretch;
    justify-content: center;
`

export const SearchColumn = styled.div`
    width: 20%;
    border-right: solid 3px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const SearchDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: .5rem;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`
export const SearchOutline = styled.div`
    display: flex;
    width: 50%;
    border: solid 1px #000;
    border-radius: 5px;
    margin: .2rem;

    @media (max-width: 1100px) {
        width: 95%;
    }
`
export const SearchBar = styled.input`
    color: #000;
    font-size: 15px; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    
    border-radius: 5px;
    display: flex;
    flex: 1 1 auto;
    border: none;
    width: 0;
`
export const ArtistList = styled.nav`
    width: 100%;
    height: 85vh;
    overflow-x: hidden;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export const NavLink = styled(Link)`
    color: Black;
    font-size: x-large; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    width: 95%;
    padding: .2rem;
    align-items: center;
    margin: .5rem 0px; 

    background-color: ${props => props.isYellow ? "#EED3AE" : "#B0DBFF"};
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;

    &:hover {
        background-color: #BBE1FA;
    }
`
export const ContentContainer = styled.div`
    width: 80%;
    height: auto;

    overflow-x: hidden;
    oveflow-y: auto;
    
    display: flex;
    justify-content: ${props => props.location || "flex-start"};
    flex-direction: ${props => props.align || "default"};

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`
export const MiddleText = styled(Header)`
    margin-top: 10rem;
    @media (max-width: 1200px) {
        margin-top: -5rem;
    }
`

export const LeftContent = styled.div`
    width: ${props => props.width || "82%"};
    height: auto;
    margin: 1rem;
    justify-content: center;

    overflow-x: hidden;
    oveflow-y: auto;

    @media (max-width: 1200px) {
        width: 95%;
        height: 50%;
    }
`
export const RightContent = styled.nav`
    width: 18%;
    border-left: solid 1px;
    padding: 0px .9rem;
    margin: 1rem 0px;

    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center" };
    justify-content: flex-start;

    overflow-x: hidden;
    oveflow-y: auto;

    @media (max-width: 1200px) {
        width: 97%;
        height: 50%;
        padding: 0px;
        margin-left: 1rem;
        border-left: none;
        border-top: solid 1px;
        border-bottom: solid 1px;
    }
`

export const Banner = styled.img`
    width: 100%;
    height: auto;
`
export const Title = styled.h2`
    color: #000;
    font-size: 45px;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 1rem 0px 0px 0px;
`
export const Description = styled.p`
    color: #000;
    font-size: normal;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: ${props => props.align || "center"};

    margin: .5rem;
    
`
export const MiniBox = styled(DivContainer)`
    min-height: auto;
    align-items: space-between;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`
export const LikeButton = styled.button`
    color: #1B262C;
    font-size: 24px; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    width: 100%;
    padding: .2rem .5rem;
    align-self: center;
    margin: 0px; 
    overflow: hidden;

    background-color: #EED3AE;
    border-radius: 10px;
    border: 1px solid #1B262C;
    cursor: pointer;

`
export const Heart = styled.img`
    height: 1rem;
    width: auto;
`

export const GenreList = styled.ul`
    color: #000;
    font-size: normal;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: inherit;

    margin: 0px;
`
export const GenreItem = styled.li`
    margin-left: -0.75rem;
`







// the moving text box https://stackoverflow.com/questions/49085878/how-to-make-input-inside-flexbox-size-to-available-space
// the shrinkign of the space between the lists
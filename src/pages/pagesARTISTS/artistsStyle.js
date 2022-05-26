import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Header } from '../../style';
import { getByTitle } from "@testing-library/react";

export const ArtContainer = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: stretch;

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
    margin: .2rem;

    @media (max-width: 1100px) {
        width: 100%;
    }
`
export const SearchBar = styled.input`
    color: Black;
    font-size: large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    
    display: flex;
    flex: 1 1 auto;
    border: none;
    width: 0;
`

export const ArtistList = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const NavLink = styled(Link)`
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    width: 100%;
    padding: .2rem 0px;
    align-items: center;
    margin: .5rem 0px; 

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
`

export const ContentContainer = styled.div`
    width: 80%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    
`
export const MiddleText = styled(Header)`
    margin-top: 10rem;
`

export const LeftContent = styled.div`
    width: 85%;
    margin: 1rem;
    justify-content: center;
`
export const RightContent = styled.nav`
    width: 10%;
    border-left: solid 1px;
    padding: 0px .9rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Banner = styled.img`
    width: 100%;
    height: auto;
`
export const ArtistTitle = styled.h2`
    color: #000;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 1rem 0px 0px 0px;
`
export const Description = styled.p`
    color: #000;
    font-size: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: ${props => props.align || "center"};

    margin: .5rem;
    
`
export const GenreList = styled.ul`
    color: #000;
    font-size: normal;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: inherit;

    margin: 0px;
`

export const LikeButton = styled.div`
    
`

export const AlbumTitle= styled.div`
    
`







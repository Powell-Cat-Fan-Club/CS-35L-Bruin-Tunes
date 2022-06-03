import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"
import { DivContainer as Container, Header as Title } from "../../style";

export const DivContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
`
export const Header = styled(Title)`
    margin: 1.5rem 0px;
`

export const ContentContainer = styled(DivContainer)`
    height: ${props => props.height || "78vh"};
    width: 100%;
    max-width: 60rem;
    align-items: flex-start;
    justify-contents: flex-start;
`
export const SearchBar = styled.input`
    color: #000;
    font-size: 1.2rem;
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    text-decoration: none;
    border: solid 2px;
    border-radius: 5px;

    display: block;
    width: 98.9%;
    margin-bottom: 2rem;
    padding: 0.2rem;
`
export const RankList = styled.ol`
    color: #000;
    font-size: 3rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: inherit;
    list-style-position: inside;

    width: 97.2%;
    margin: 0px;
    margin-left: -.9rem;
    height: 72vh;
    overflow: auto;

    counter-reset: item;
    list-style-type: none;
`

export const RankItem = styled(Link)`
    color: #000;
    font-size: 3rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    
    border: solid 2px;
    margin-left: -1.5rem;
    
    display: flex;
    flex-direction: row;

    &:nth-of-type(odd) {
        background-color: #9FC7DF;
    }
    &:nth-of-type(even) {
        background-color: #f0f0f0;
    }
    &:hover{
        background-color: #6294B3;

    }

`
export const RankNumber = styled.li`
    padding: 0px 1rem;
    border-right: solid 1px;
    &::before {
        content: counter(item) "  "; 
        counter-increment: item;
    } 

`

export const GenreDiv = styled.div`
    padding: 0px 0.75rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
`
export const NameDiv = styled(GenreDiv)`
    border-right: solid 1px;
    width: 20%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`

export const ArtistName = styled.h3`
    color: #000;
    font-size: 2rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 0px;
`
export const ArtistLikes = styled.p`
    color: #000;
    font-size: 1rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 0px;
`
export const GenreTag = styled.p`
    color: #000;
    font-size: 1.5rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 0px;
`
export const GenreList = styled.ul`
    margin-left: 1.5rem;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
`
export const GenreItem = styled.li`
    font-size: 1rem;
    list-style-position: outside;
    margin: .2rem 2.5rem .2rem 0px;   

`
export const GenreName = styled.p`
    color: #000;
    font-size: 1rem;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 0px;
`

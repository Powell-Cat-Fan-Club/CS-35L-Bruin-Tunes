import styled from "styled-components";
import { DivContainer, Header as Title } from "../../style";
import { NavLink as Link} from 'react-router-dom';

export const MainContainer = styled(DivContainer)`
    width: ${props => props.width || "auto" };
    min-height: 90vh;
    padding: 0px 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SideContainer = styled(MainContainer)`
    background-color: #aaaaaa;
`

export const Header = styled(Title)`
    text-shadow: none;
    margin: 0px 1rem 0.5rem;
`

export const ErrorBox = styled.h3`
    color: #a00;
    font-size: 12px; /* not set */
    font-family: "Noto Sans", Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    display: ${props => props.show ? "flex" : "none"  };
    margin: .5rem 0px;
`

export const InputBox = styled.input`
    color: #00;
    font-size: 20px; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
    width: 60%; 
    margin: .5rem; 
    
`
export const SubmitButton = styled.button`
    color: #000;
    font-size: 25px; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem 2rem;
    align-items: center;

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;

    &:hover {
        background-color: #BBE1FA;
    }
`

export const NavLink = styled(Link)`
    color: Black;
    font-size: x-large; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem 2rem;
    align-items: center;
    margin: 0px; 

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;

    &:hover {
        background-color: #BBE1FA;
    }
`

export const AccountForm = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

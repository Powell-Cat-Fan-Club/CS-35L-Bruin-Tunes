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
    color: Black;
    font-size: normal; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    display: ${props => props.show ? "flex" : "none"  };
    margin: .5rem 0px;
`

export const InputBox = styled.input`
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
    width: 60%; 
    margin: .5rem; 
    
`
export const SubmitButton = styled.button`
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem;
    align-items: center;

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
`
export const SubText = styled.p`
    color: Black;
    font-size: large; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;
    margin: 0px 0px 1rem;
`

export const NavLink = styled(Link)`
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem;
    align-items: center;
    margin: .5rem 0px; 

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
`

export const AccountForm = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

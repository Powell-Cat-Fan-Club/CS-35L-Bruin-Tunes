import styled from "styled-components";
import { DivContainer, Header as Title } from "../../style";
import { NavLink as Link} from 'react-router-dom';

export const MainContainer = styled(DivContainer)`
    width: ${props => props.width || "auto" };
    min-height: 89.5vh;
    padding: 0px 1rem;

    background: url("${process.env.public_url}/images/logoBack.svg") no-repeat center;
    /*
    https://publicdomainvectors.org/en/free-clipart/Black-and-white-musical-notes-vector-drawing/12823.html
    for the image (ported locally becasue I changed the colors in edit)
    */

    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const SideContainer = styled(MainContainer)`
    background: rgb(60,125,173);
    background: linear-gradient(0deg, rgba(60,125,173,1) 10%, rgba(121,181,232,1) 40%, rgba(232,249,253,1) 92%);
    /* https://cssgradient.io/ for the gradient */
    border-left: ${props=> props.isRight? "2px solid rgba(4,28,50,0.25)":"none" };
    border-right: ${props=> props.isRight? "none":"2px solid rgba(4,28,50,0.25)" }
`

export const Header = styled(Title)`
    text-shadow: none;
    margin: 0px 1rem 0.5rem;
`

export const ErrorBox = styled.h3`
    color: #a00;
    font-size: 1rem; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif; 
    text-decoration: none;
    text-align: center;

    display: ${props => props.show ? "flex" : "none"  };
    margin: .2rem 0px;
`

export const InputBox = styled.input`
    color: #00;
    font-size: 1.2rem; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    border-radius: 10px;
    border: 1px solid #064371;
    cursor: pointer;
    width: 60%; 
    margin: .5rem 0px; 
    
`
export const SubmitButton = styled.button`
    color: #fff;
    font-size: 1.5rem; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem 1.5rem;
    align-items: center;

    background-color: #064371;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0A75C7;
    }
`

export const NavLink = styled(Link)`
    color: Black;
    font-size: 1.5rem; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem 1.5rem;
    align-items: center;
    margin: 0px; 

    background-color: #ddd;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
`

export const AccountForm = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

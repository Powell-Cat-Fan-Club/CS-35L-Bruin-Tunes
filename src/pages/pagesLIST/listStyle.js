import styled from 'styled-components';
import { DivContainer as Container } from '../../style';

export const DivContainer = styled(Container)`
    margin-top: 1rem;
    flex-direction: ${props => props.direction};
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const SideContainer = styled(Container)`
    width: 50%;
    height: 78vh;
    flex-direction: column;
   
    border: solid 2px;
    border-left: ${props => props.isRight? "none":"solid 2px" };

    @media (max-width: 1000px) {
        width: 99%;
        border: solid 2px;
        border-top: ${props => props.isRight? "none":"solid 2px" }
    }
`
export const SideContent = styled(Container)`
    padding: 1rem;
    width: 96.5%;
    flex-direction: inherit;
    overflow-x: hidden; 
    overflow-y: auto;
`
export const SideTitle = styled.h2`
    color: #000;
    font-size: 2.3rem; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;
    
    padding: 1rem;
    margin: 0px;
    border-bottom: solid 2px;
    background-color: ${props => props.color};
` 

export const Username = styled.input `
    color: #000;
    font-size: 1.5rem; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;

    margin: 1rem 0px;
    display: flex;
    width: 98.5%;
    max-width: 18rem;
`
export const ChoiceBox = styled.fieldset`
    border-color: gold;
    margin: .5rem 0px;
`

export const OptionTitle = styled.legend `
    color: #000;
    font-size: 2rem; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`

export const OptionChoice = styled.label `
    color: #000;
    font-size: 1.2rem; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;

    display: block;
`
export const SubmitButton = styled.button`
    color: #000;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    padding: .2rem;
    align-items: center;
    margin-top: .5rem;

    background-color: #55c1ff;
    border-radius: 10px;
    border: 1px solid #16425b;
    cursor: pointer;
`


export const ListCard = styled(DivContainer)`
    display: block;
    min-heigh: auto;
    padding: .5rem;
    align-items: center;
    margin: .5rem; 

    overflow: visible;

    background-color: #ddd;
    border-radius: 5px;
    border: 1px solid #16425b;
    box-shadow: 0px 0px 10px 1px #cccccc;


`
export const ListCreator = styled.h3`
    margin: 0px;
    color: #000;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`
export const ListContent = styled.p`
    margin: 0px;
    color: #000;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`
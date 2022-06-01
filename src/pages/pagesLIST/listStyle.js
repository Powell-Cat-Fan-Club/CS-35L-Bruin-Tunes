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
    padding: 1rem;
    border-left: ${props => props.isRight? "solid 2px":"none"};

    @media (max-width: 1000px) {
        width: 100%;
        border-left: none;
        border-top: ${props => props.isRight? "solid 2px":"none"};
    }
`
export const SideContent = styled(Container)`
    width: 100%;
    flex-direction: inherit;
    overflow-x: hidden; 
    overflow-y: auto;
`
export const SideTitle = styled.h2`
    color: Black;
    font-size: xx-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;
    
    margin-top: 0px;
    margin-bottom: 1rem;
` 




export const Username = styled.input `
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;

    margin: 1rem 0px;
`
export const OptionTitle = styled.legend `
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`
export const OptionChoice = styled.label `
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;

    flex-direction: column;

`
export const SubmitButton = styled.button`
    color: Black;
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
    padding: .5rem;
    align-items: center;
    margin: .5rem; 

    background-color: #55c1ff;
    border-radius: 5px;
    border: 1px solid #16425b;
    box-shadow: 0px 0px 10px 1px #cccccc;


`
export const ListCreator = styled.h3`
    margin: 0px;
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`
export const ListContent = styled.p`
    margin: 0px;
    color: Black;
    font-size: x-large; 
    font-family: Arial, Helvetica, sans-serif;  
    text-decoration: none;
`
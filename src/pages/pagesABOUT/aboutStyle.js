import styled from "styled-components"
import { DivContainer as Container } from "../../style"

export const DivContainer = styled(Container)`
    width: 100%;
    flex-direction: column;
    margin: 1rem 0px; 
`

export const WebDescription = styled.p`
    color: #000;
    font-size: 20px;
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
    text-decoration: none;
    text-align: center;
    margin: 0px 5rem;  
`

export const TeamContainer = styled(DivContainer)`
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
    margin: 0px;
`

export const PersonCard = styled.div`
    width: 15%;
    min-height: 180px;
    padding: .5rem;
    align-items: center;
    margin: .5rem; 

    background-color: #6FB2D2;
    border-radius: 5px;
    border: 1px solid #16425b;
    box-shadow: 0px 0px 10px 1px #cccccc;

    @media (max-width: 1100px) {
        width: 43%;
        min-height: auto;
    }

    @media (max-width: 800px) {
        width: 95%;
    }
`

export const PersonName = styled.h4`
    color: #000;
    font-size: 20px;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif; 
    font-weight: 1000;
    text-decoration: none;
    text-align: center;

    margin: 20px 5px 0px 5px;
`

export const PersonDescription = styled.p`
    color: #000;
    font-size: 16px; 
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;  
    text-decoration: none;
    text-align: center;

    margin-top: 20px;
`

export const PersonRole = styled(PersonDescription)`
    margin: 0px 5px;
`

export const Gallery = styled(DivContainer)`
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    margin: .5rem;
`

export const Image = styled.img`
    margin: .5rem;
    width: 17%;

    border-radius: 5px;
    border: 1px solid #16425b;
    box-shadow: 0px 0px 10px 1px #cccccc;iss

`
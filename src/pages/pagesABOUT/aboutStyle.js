import styled from "styled-components"

export const Container = styled.div`
    justify-content: center;
    margin: 1rem 0px 5rem;
`

export const WebDescription = styled.p`
    color: #000;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 1rem 5rem 0px;  
`

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
`

export const PersonCard = styled.div`
    width: 15%;
    min-height: 180px;
    padding: .5rem;
    align-items: center;
    margin: 10px 10px; 

    background-color: #55c1ff;
    border-radius: 5px;
    border: 1px solid #16425b;
    box-shadow: 0px 0px 10px 1px #cccccc;

    @media (max-width: 1100px) {
        width: 43%;
        min-height: auto
    }

    @media (max-width: 800px) {
        width: 95%;
    }
`

export const PersonName = styled.h4`
    color: Black;
    font-size: large; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    margin: 20px 5px 0px 5px;
`

export const PersonRole = styled.p`
    color: Black;
    font-size: normal; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    justify-content: center;
    align-items: center;
    margin: 5px;
`

export const PersonDescription = styled.p`
    color: Black;
    font-size: normal; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    height: auto;
    margin: 20px 5px;
`
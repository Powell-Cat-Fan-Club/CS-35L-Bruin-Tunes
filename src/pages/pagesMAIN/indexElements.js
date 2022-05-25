import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";

export const HomeBackground = styled.div`
    background-image: url("${process.env.PUBLIC_URL}/homeBack.jpg");
    background-repeat: no-repeat;
    background-size: 100vw auto;
`

export const TitleContainer = styled.div`
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Description = styled.p`
    text-align: center;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    margin: 0;
`


export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;      


export const NavLink = styled(Link)`
    color: Black;
    font-size: large; /* not set */
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    width: 20%;
    padding: .5rem;
    align-items: center;
    margin: 0 10px; 

    background-color: #55c1ff;
    border-radius: 16px;
    border: 1px solid #16425b;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 97%;
        margin: 5px 0;
    }

`
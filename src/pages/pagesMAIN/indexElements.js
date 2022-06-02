import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";

export const HomeBackground = styled.div`
    background-image: url("${process.env.public_url}/images/homeBack.jpg");
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
    color: Black;
    font-size: 20px; /* not set */
    font-family: "Noto Sans", Arial, Helvetica, sans-serif; /* not set */ 
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    margin: 0;
`


export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;      


export const NavLink = styled(Link)`
    color: #000;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif; /* not set */ 
    text-decoration: none;
    text-align: center;

    width: 25%;
    padding: .5rem;
    align-items: center;
    margin: 0 10px; 

    background-color: #FFE698;
    border-radius: 16px;
    border: 1px solid #6B5F4E;
	box-shadow: 0px 8px 4px -7px #6B5F4E;  
	cursor: pointer;


    &:hover {
        background-color: #FFE194;
    };


    @media (max-width: 700px) {
        width: 97%;
        margin: 5px 0;
    }

`
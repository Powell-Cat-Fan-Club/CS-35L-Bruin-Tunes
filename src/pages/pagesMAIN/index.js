/***************************************************************************
*    Citation
*    Title: How to create a multi-page website using React.js ?
*    Author: namanjaingeeksforgeeks
*    Date: 2022
*    Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
*    Usage: Structure of this file
****************************************************************************/
import React from 'react';
import { Header } from '../../style';
import { Description, HomeBackground, LinksContainer , NavLink, TitleContainer} from './indexElements';

  
const Home = () => { 
  return (
    <HomeBackground>
      <TitleContainer>
        <Header>Welcome to BruinTunes</Header>
        <Description> A Streaming Site Made Exclusively For Bruins </Description>
      </TitleContainer>
      
      <LinksContainer>
        <NavLink to="/artists"> Artists </NavLink>
        <NavLink to="/comments"> Comments </NavLink>
        <NavLink to="/charts"> Charts </NavLink>
        <NavLink to="/userlist"> Lists </NavLink>
      </LinksContainer>
    </HomeBackground>
  );
};
  
export default Home;
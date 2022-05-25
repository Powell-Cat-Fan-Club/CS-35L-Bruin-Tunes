//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import { Header } from '../../style';
import { Description, HomeBackground, LinksContainer , NavLink, TitleContainer} from './indexElements';

  
const Home = () => { 
  return (
    <HomeBackground>
      <TitleContainer>
        <Header>Welcome to BruinTunes</Header>
        <Description> <b>The baby of Spotify or Reddit? Someone think of something else Q_Q</b> </Description>
      </TitleContainer>
      
      <LinksContainer>
        <NavLink to="/artists"> Artists </NavLink>
        <NavLink to="/comments"> Comments </NavLink>
        <NavLink to="/charts"> Charts </NavLink>
        <NavLink to="/userlist"> Lists </NavLink>
        <NavLink to="/login"> Sign In </NavLink>
      </LinksContainer>
    </HomeBackground>
  );
};
  
export default Home;
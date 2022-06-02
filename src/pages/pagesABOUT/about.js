import React from 'react';
import { Container, Header } from '../../style';
import { PersonCard, PersonDescription, PersonName, PersonRole, TeamContainer, WebDescription } from './aboutStyle';
  
const About = () => {
  return (
    <div>
      <br/>
      <Container> 
        <Header> Our Mission </Header>
        <WebDescription>
        Our mission as the developers behind BruinTunes is to spread the love of music to Bruins far and wide. 
        Whether that be on the way to class, in YRL Floors 2-5, or just chillaxing in the dorm, 
        we hope that Bruins everywhere will find it easy and convenient to listen to and discuss their favorite music 
        with other Bruins. "We the team of BruinTunes encourage you to just take a moment from your busy lives as 
        college students and relax with our carefully curated selection of music. Sit back, relax, and scroll these 
        pictures of Powell cat."
        </WebDescription>
      </Container>
      <Container>
        <Header> The Powell Cat Fan Club Team</Header>
        <TeamContainer>
          <PersonCard>
            <PersonName> Rachel Truong </PersonName>
            <PersonRole> Frontend Developer </PersonRole>
            <PersonDescription>
              Designed the look  and the login page
            </PersonDescription>
          </PersonCard>

          <PersonCard>
            <PersonName> Tiffany Hwang </PersonName>
            <PersonRole> Full-stack Developer </PersonRole>
            <PersonDescription>
              Designed the artists page and implemented backend
            </PersonDescription>
          </PersonCard>

          <PersonCard>
            <PersonName> Laura Ness </PersonName>
            <PersonRole> Backend Developer and Project Manager</PersonRole>
            <PersonDescription>
              Set up the backend and managed project
            </PersonDescription>
          </PersonCard>

          <PersonCard>
            <PersonName> Daniel Zhu </PersonName>
            <PersonRole> Frontend Developer </PersonRole>
            <PersonDescription>
              Designed the Charts and List pages
            </PersonDescription>
          </PersonCard>

          <PersonCard>
            <PersonName> Brandon Tran </PersonName>
            <PersonRole> Frontend Developer </PersonRole>
            <PersonDescription>
              Designed the Comments page
            </PersonDescription>
          </PersonCard>
        </TeamContainer>
      </Container>
      <Container>
        <Header> Pictures of Powell Cat Collected over the Duration of the project</Header>
        <WebDescription> Does not exist yet because fuck me </WebDescription>
      </Container>
    </div>
  );
};
  
export default About;
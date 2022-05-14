//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import Image from '../images/idkcat.jpg'
  
const About = () => {
  return (
    <div class = "about-page">
      <p class = "site-description"> Spotify is good, but it could be better. Imagine a platform where you could discuss your 
      favorite artists and music with other people in addition to listening to your favorite songs. Introducing…BruinTunes™!!! 
      BruinTunes is like Spotify, but better. You can share your unique perspectives on diverse genres of music and discuss your 
      favorite artists and albums with like-minded people.
      <br/>
      <br/>
      BruinTunes will be a web-based application that hosts the links to your favorite music on its platform, along with a few other 
      features. You can find some of the most popular artists through tags like genres, decade, and more. Additionally, you can comment 
      on and like certain artists and their songs, as well as like other people's comments. Finally, you can make lists and rankings of 
      your favorite music, although this won't be tied to an account.
      <br/>
      <br/>
      Our motivation for this project is to create a platform for UCLA students to share their music with each other. As music lovers 
      ourselves, we want a platform where anyone can find information about new artists and discover new songs. Spotify is great for 
      listening to music and making playlists. However, there's no good way to comment on and make lists of your favorite music. 
      Additionally, with YouTube's choice to remove comments on “Artist - Topic” channels, it's a lot harder to be social with your music. 
      Music is one way of communicating with other people, and that's a void BruinTunes will fill.
      </p>
      
      <div class = "team-description">
        <div class = "general-desc">
          <img src={Image} alt="ghost cat" />
          <h1> About Us!</h1>
          <p>Hi! We are a team of 4 undergraduate students at UCLA. We love music and Powell Cat!</p>
          <p>Mail us feedback at bruintunesucla@gmail.com</p>
        </div>

        <div class="person-desc">
          <h2>Our Team</h2>
          <p>Laura Ness</p>
          <p>Rachel Truong</p>
          <p>Tiffany Hwang</p>
          <p>Brandon Tran</p>
          <p>Daniel Zhu</p>
        </div>
      </div>

    </div>
  );
};
  
export default About;

/* TEAM: If you have anything better, you can change it*/
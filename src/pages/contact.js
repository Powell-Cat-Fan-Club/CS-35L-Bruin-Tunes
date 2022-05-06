//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import Image from '../images/idkcat.jpg'
  
const Contact = () => {
  return (
    <div class = "about-page">
      <div class = "logo">
        <br/>
        <img src={Image} alt="ghost cat" />
        <h2> A cat!</h2>
      </div>
      <div class = "description">
        <h1> About Us!</h1>
        <p> Hi! We are a team of 4 undergraduate students at UCLA. We love music and Powell Cat!</p>
        <p>Mail us feedback at bruintunes@ucla.edu</p>
      </div>

      <h2>Our Team</h2>
      <div class="the descriptions">
        <p>Laura Ness - lness@ucla.edu</p>
        <p>Rachel Truong - rachtruong@ucla.edu</p>
        <p>Tiffany Hwang - thwang3@ucla.edu</p>
        <p>Brandon Tran - tranbrandon1233@gmail.com</p>
        <p>Daniel Zhu - danielzhu21347@gmail.com</p>
      </div>
    </div>
  );
};
  
export default Contact;
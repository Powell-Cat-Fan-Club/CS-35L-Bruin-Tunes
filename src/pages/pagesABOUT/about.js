//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/ 
//credit for gallery https://www.codegrepper.com/code-examples/javascript/How+to+load+all+images+in+a+folder+react
import React from 'react';
import { Header } from '../../style';
import { 
  DivContainer,
  Gallery,
  Image,
  PersonCard, 
  PersonDescription, 
  PersonName, 
  PersonRole, 
  TeamContainer, 
  WebDescription 
} from './aboutStyle';

const About = () => { 
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
 
  const images = importAll(require.context("../../../public/images/powellpics", false, /\.(png|jpe?g|svg)$/));
  console.log(images);
 
  return (
    <DivContainer>
      <DivContainer> 
        <Header> Our Mission </Header>
        <WebDescription>
        Our mission as the developers behind BruinTunes is to spread the love of music to Bruins far and wide. 
        Whether that be on the way to class, in YRL Floors 2-5, or just chillaxing in the dorm, 
        we hope that Bruins everywhere will find it easy and convenient to listen to and discuss their favorite music 
        with other Bruins. "We the team of BruinTunes encourage you to just take a moment from your busy lives as 
        college students and relax with our carefully curated selection of music. Sit back, relax, and scroll these 
        pictures of Powell cat."
        </WebDescription>
      </DivContainer>
      <DivContainer>
        <Header> The Powell Cat Fan Club Team</Header>
        <TeamContainer>
          <PersonCard>
            <PersonName> Rachel Truong </PersonName>
            <PersonRole> Frontend Developer </PersonRole>
            <PersonDescription>
              Designed the look of the website and the home, about, and login page
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
      </DivContainer>
      <DivContainer>
        <Header> Pictures of Powell Cat Collected over the Duration of the project </Header>
        <Gallery>
          <Image src={images["20220429_074829.jpg"]} alt="20220429_074829.jpg" />
          <Image src={images["20220429_074948.jpg"]} alt="20220429_074948.jpg" />
          <Image src={images["20220504_081040.jpg"]} alt="20220504_081040.jpg" />
          <Image src={images["20220504_081046.jpg"]} alt="20220504_081046.jpg" />
          <Image src={images["20220506_083015.jpg"]} alt="20220506_083015.jpg" />
          <Image src={images["20220506_083019.jpg"]} alt="20220506_083019.jpg" />
          <Image src={images["20220506_083038.jpg"]} alt="20220506_083038.jpg" />
          <Image src={images["20220506_083239.jpg"]} alt="20220506_083239.jpg" />
          <Image src={images["20220506_083304.jpg"]} alt="20220506_083304.jpg" />
          <Image src={images["20220513_075229.jpg"]} alt="20220513_075229.jpg" />
          <Image src={images["20220513_075240.jpg"]} alt="20220513_075240.jpg" />
          <Image src={images["20220513_075247.jpg"]} alt="20220513_075247.jpg" />
          <Image src={images["20220513_075257.jpg"]} alt="20220513_075257.jpg" />
          <Image src={images["20220523_080858.jpg"]} alt="20220523_080858.jpg" />
          <Image src={images["20220523_080906.jpg"]} alt="20220523_080906.jpg" />
          <Image src={images["20220523_080914.jpg"]} alt="20220523_080914.jpg" />
          <Image src={images["20220523_080937.jpg"]} alt="20220523_080937.jpg" />
          <Image src={images["20220523_080948.jpg"]} alt="20220523_080948.jpg" />
          <Image src={images["20220523_081001.jpg"]} alt="20220523_081001.jpg" />
          <Image src={images["20220524_081502.jpg"]} alt="20220524_081502.jpg" />
          <Image src={images["20220524_081521.jpg"]} alt="20220524_081521.jpg" />
        </Gallery>
      </DivContainer>
    </DivContainer>
  );
};
  
export default About;


/*
        {Object.keys(images).forEach(key => <Image src={images[key]} alt={key}/>)}

<Image src={process.env.PUBLIC_URL + "/images/homeBack.jpg"}/>
          {(images).keys().map((images[i]) => (
              <Image src={images[i]} alt={i}/>
            ))}
Object.keys(images).forEach(key => return <Image src={images[key]} alt={key}/>)
map((item) => { 
  <Image src={images[item] alt={item});



 

*/
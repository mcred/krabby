import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";

import '../styles/global';
import styled from 'react-emotion';

import logotopaz from '../images/logo-topaz.svg';
import topazshottt from '../images/shottt-topaz.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';

import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import FloatingLabel, { floatingStyles, focusStyles, inputStyles, labelStyles, spanStyles, buttonStyles, textareaStyles } from 'floating-label-react';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
  padding: .5rem 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const SunRaysfromGod = styled(ParallaxLayer)`
`;

const FormTitle = styled.h3`
  ${tw('text-white mb-0')};
  text-shadow: -2px 4px 32px rgba(0, 0, 0, 1);
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
  color: #FFEE00;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.85em;
   }
`;
const inputStyle = {
  floating: {
    ...floatingStyles,
    color: 'yellow',
  },
  focus: {
    ...focusStyles,
    borderColor: 'yellow'
  },
  input: {
    ...inputStyles,
    fontFamily: 'Abril Fatface, cursive',
    borderBottomWidth: '2',
    borderColor: '#D81159',
    width: '100%',
    height: '4rem',
    color: 'white',
    padding: '1rem 0 0 1rem'
  },
  label: {
    ...labelStyles,
    marginTop: '.5em',
    width: '100%',
    color: 'white'
  },
  span: {
    ...spanStyles,
    fontFamily: 'Abril Fatface, cursive',
    fontSize: '.85rem',
    top: '1rem',
    left: '1rem'
  }
}
const OceanBG = styled.div`
  background: rgb(0,5,10);
  background: linear-gradient(360deg, rgba(0,5,10,1) 0%, rgba(0,49,98,1) 78%, rgba(0,101,157,1) 100%);
  background-size: cover;
  background-image: url('https://krabby.trice.design/static/sunraysfromgod-19f4706e5c5ca91ef97729db3ecd9bda.png');
  background-repeat: no-repeat;
  background-position: top center;
`;
const WhiteContent = styled.div`
  background: white;
`;
const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const Navigation = styled.div`
  ${tw('w-full')};
  padding-bottom:0;
`;
const NavContact = styled.a``;
const ButtonCTA = styled.button``;
const Hero = styled.div`
  ${tw('w-full')};
  display: grid;
  justify-items: center;
  grid-template-columns:
        [viewport-start] minmax(1em, 1fr)
        [container-start] minmax(0, 30em) [container-end]
        minmax(1em, 1fr) [viewport-end];
`;
const BigTitle = styled.h1`
  ${tw('text-white mb-0')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 3em;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1.85em;
   }
`;
const Subtitle = styled.p`
  ${tw('text-white')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  line-height: 1.45em;
  font-size: 1.125em;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1em;
   }
`;
const ProjectHero = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 50% minmax(300px, 1fr);
  grid-template-rows: auto;
  grid-template-areas: ". Image"
                       "Logo Image"
                       "Title Image"
                       "Description Image"
                       ". Image";
  @media (max-width: 900px) {
   grid-template-columns: 1fr;
   grid-template-rows: 2rem auto;
   grid-gap: 0;
   grid-template-areas: "." "Logo" "Title" "Image" "Description";
  }
`;
const Description = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;

const ProjectCardTitle = styled.h4`
  ${tw('text-white uppercase')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  grid-area: Title;
`;
const ProjectCardDescription = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
  grid-area: Description;
`;





class App extends React.Component {
  render() {
    return (
      <div style={{display: 'grid', overflowX: 'hidden' }}>

        <OceanBG>
          <HeaderContainer className="header__container">
            <Navigation>
              <ul className="nav__main">
                <li>
                  <Link to="/" className=""><img src={logotd} className="logo__main" /></Link>
                </li>
                <li>
                  <ul className="social-icons">
                    <li className="contact">
                      <NavContact onClick={() => this.parallax.scrollTo(5)}>Contact</NavContact>
                    </li>
                    <li><a href="https://dribbble.com/trice" title="Follow me on Dribbble">
                      <img src={dribbble} className="" alt="Dribbble" /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/matt-trice-5053b325/" title="Serious as fuck">
                      <img src={linkedin} className="" alt="LINKED FUCKING IN" /></a>
                    </li>
                    <li><a href="https://www.instagram.com/trice.design/" title="Follow me on Instagram">
                      <img src={instagram} className="" alt="Instagram" /></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Navigation>
          </HeaderContainer>

          <Container>
            <ProjectHero>
              <img src={topazshottt} className="shottt-topaz" />
              <img src={logotopaz} style={{ gridArea: 'Logo' }} />
              <ProjectCardTitle>UX DESIGN, FRONT END DEVELOPMENT</ProjectCardTitle>
              <ProjectCardDescription>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
                <Link to="topaz">
                  <button className="btn btn--actionjackson">
                    <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardDescription>
            </ProjectHero>
          </Container>
        </OceanBG>




        <WhiteContent>
          <Container>
          <p>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
            <Link to="topaz">
              <button className="btn btn--actionjackson">
                <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
              </button>
            </Link>
          </p><p>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
            <Link to="topaz">
              <button className="btn btn--actionjackson">
                <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
              </button>
            </Link>
          </p>
          </Container>
        </WhiteContent>




      </div>

    )
  }
}

export default App;

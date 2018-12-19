import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";

import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import ProjectCardText from '../components/ProjectCardText';
import Contact from '../components/Contact';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import logotopaz from '../images/logo-topaz.svg';
import logofreshtix from '../images/logo-freshtix.svg';
import logorobit from '../images/logo-robit.svg';
import logopayscape from '../images/logo-payscape.svg';
import topazshottt from '../images/shottt-topaz.png';
import freshtixshottt from '../images/shottt-freshtix.png';
import robitshottt from '../images/shottt-robit.png';
import payscapeshottt from '../images/shottt-payscape.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';

import squidsilhouette from '../images/squid-silhouette.png';
import bottomburm from '../images/bottom-burm.svg';
import howdy from '../images/howdy.svg';
import anglerbright from '../images/angler-bright.png';
import anglerdark from '../images/angler-dark.png';
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

const Angler = styled.div`
  position: relative;
  left: -2rem;
  max-width: 100%;
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

const OceanBG = styled(ParallaxLayer)``;
const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const ProjectHero = styled.div`
display: grid;
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
const Description = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;
const ProjectWrapper = styled.div`
  display: grid;
`;





class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={6}>

        <OceanBG offset={0} speed={0} factor={6} className={'oceanbg'}   />
        <SunRaysfromGod offset={0} speed={.25} factor={6}  className={'sunrays'} style={{ backgroundSize: 'contain' }} />

        <ParallaxLayer offset={1} speed={1}>
          <Container>
            <ProjectWrapper className="project__grid--imageRight">
              <img src={topazshottt} className="shottt-topaz" />
              <ProjectCardText title="UX DESIGN, FRONT END DEVELOPMENT">
                <img src={logotopaz} />
                <Description>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
                <Link to="lokk">
                  <button class="btn btn--actionjackson">
                    <span class="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                  </button>
                </Link>
              </ProjectCardText>
            </ProjectWrapper>
          </Container>
        </ParallaxLayer>



        <ParallaxLayer offset={0} speed={1}>
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
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={.1}>
          <ProjectHero className="project__grid--hero">
            <img src={topazshottt} className="shottt-topaz" />
            <Description><img src={logotopaz} /><br />This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
          </ProjectHero>
        </ParallaxLayer>
      </Parallax>

    )
  }
}

export default App;
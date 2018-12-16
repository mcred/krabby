import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";

import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import ProjectCardText from '../components/ProjectCardText';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations'
import topazshottt from '../images/shottt-topaz.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';
import logotopaz from '../images/logo-topaz.svg';
import jellyfish from '../images/jellyfish-group.svg';
import bottomburm from '../images/bottom-burm.svg';
import howdy from '../images/howdy.svg';
import anglerbright from '../images/angler-bright.png';
import anglerdark from '../images/angler-dark.png';
import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';
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
    borderBottomWidth: 2,
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
const Navigation = styled.div`
  ${tw('w-full')};
  padding-bottom:0;
`;
const NavContact = styled.a``;
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
  ${tw('mt-8')};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 50%;
  @media (max-width: 1200px) {
    grid-gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>






class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={8}>

        <SunRaysfromGod offset={0} speed={.05} factor={2} className={'sunrays'} style={{ backgroundSize: 'contain' }} />


        <ParallaxLayer offset={0} speed={1}>
          <UpBubblesOneTop>
            <SVG icon="bubble" width={3} left="36%" top="32%" />
            <SVG icon="bubble" width={2} left="40%" top="34%" />
            <SVG icon="bubble" width={4} left="42%" top="33%" />
          </UpBubblesOneTop>
          <UpBubblesTwoTop>
            <SVG icon="bubble" width={4} left="34%" top="32%" />
            <SVG icon="bubble" width={3} left="41%" top="34%" />
            <SVG icon="bubble" width={2} left="39%" top="31%" />
          </UpBubblesTwoTop>
          <UpBubblesThreeTop>
            <SVG icon="bubble" width={2} left="32%" top="36%" />
            <SVG icon="bubble" width={4} left="38%" top="30%" />
            <SVG icon="bubble" width={3} left="31%" top="35%" />
          </UpBubblesThreeTop>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.2} offset={1} factor={1} className={'background-01'} />
        <ParallaxLayer speed={0.1} offset={1} factor={2}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="26%" top="32%" />
            <SVG icon="bubble" width={2} left="30%" top="34%" />
            <SVG icon="bubble" width={4} left="32%" top="33%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="24%" top="32%" />
            <SVG icon="bubble" width={3} left="31%" top="34%" />
            <SVG icon="bubble" width={2} left="29%" top="31%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="22%" top="32%" />
            <SVG icon="bubble" width={4} left="28%" top="34%" />
            <SVG icon="bubble" width={3} left="26%" top="31%" />
          </UpBubblesThree>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} offset={1} factor={2}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="66%" top="28%" />
            <SVG icon="bubble" width={2} left="70%" top="38%" />
            <SVG icon="bubble" width={4} left="72%" top="30%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="64%" top="30%" />
            <SVG icon="bubble" width={3} left="71%" top="14%" />
            <SVG icon="bubble" width={2} left="69%" top="11%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="62%" top="22%" />
            <SVG icon="bubble" width={4} left="68%" top="44%" />
            <SVG icon="bubble" width={3} left="66%" top="21%" />
          </UpBubblesThree>
        </ParallaxLayer>





        <ParallaxLayer speed={0.2} offset={4.4} className={'foreground--coral'}>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="26%" top="32%" />
            <SVG icon="bubble" width={2} left="30%" top="34%" />
            <SVG icon="bubble" width={4} left="32%" top="33%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="24%" top="32%" />
            <SVG icon="bubble" width={3} left="31%" top="34%" />
            <SVG icon="bubble" width={2} left="29%" top="31%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="22%" top="36%" />
            <SVG icon="bubble" width={4} left="28%" top="30%" />
            <SVG icon="bubble" width={3} left="21%" top="35%" />
          </UpBubblesThree>
          <UpBubblesOne>
            <SVG icon="bubble" width={3} left="66%" top="28%" />
            <SVG icon="bubble" width={2} left="70%" top="38%" />
            <SVG icon="bubble" width={4} left="72%" top="30%" />
          </UpBubblesOne>
          <UpBubblesTwo>
            <SVG icon="bubble" width={4} left="64%" top="30%" />
            <SVG icon="bubble" width={3} left="71%" top="14%" />
            <SVG icon="bubble" width={2} left="69%" top="11%" />
          </UpBubblesTwo>
          <UpBubblesThree>
            <SVG icon="bubble" width={2} left="62%" top="22%" />
            <SVG icon="bubble" width={4} left="68%" top="44%" />
            <SVG icon="bubble" width={3} left="66%" top="21%" />
          </UpBubblesThree>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={.5}>
          <Container>
            <ProjectWrapper>


              <ProjectCardText title="UX DESIGN, FRONT END DEVELOPMENT">
                <img src={logotopaz} />
                <Description>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
                <button class="btn btn--actionjackson btn-spinner">
                  <span class="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                </button>
              </ProjectCardText>
              <img src={topazshottt} className="shottt-topaz" />


              <img src={topazshottt} className="shottt-topaz" />
              <ProjectCardText title="UX DESIGN, FRONT END DEVELOPMENT">
                <img src={logotopaz} />
                <Description>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
                <button class="btn btn--actionjackson btn-spinner">
                  <span class="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                </button>
              </ProjectCardText>


              <ProjectCardText title="UX DESIGN, FRONT END DEVELOPMENT">
                <img src={logotopaz} />
                <Description>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
                <button class="btn btn--actionjackson btn-spinner">
                  <span class="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                </button>
              </ProjectCardText>
              <img src={topazshottt} className="shottt-topaz" />


              <img src={topazshottt} className="shottt-topaz" />
              <ProjectCardText title="UX DESIGN, FRONT END DEVELOPMENT">
                <img src={logotopaz} />
                <Description>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.</Description>
                <button class="btn btn--actionjackson btn-spinner">
                  <span class="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                </button>
              </ProjectCardText>


            </ProjectWrapper>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={6.1} speed={1.2}>
          <Angler className={'anglerFish'}>
            <img class="bottom" src={anglerdark} />
            <img class="top" src={anglerbright} />
          </Angler>
        </ParallaxLayer>
        <ParallaxLayer offset={6.2} speed={1.8}>
          <Container>
          <Hero>
            <FormTitle className="item--contained">Let's have a conversation</FormTitle>
            <form class="contact__form item--contained" name="contact" method="POST" data-netlify="true">
              <FloatingLabel id='name' name='name' placeholder='Name' type='text' styles={inputStyle} required />
              <FloatingLabel id='email' name='email' placeholder='Email' type='email' styles={inputStyle} required />
              <FloatingLabel id='comments' name='comments' placeholder='Tell me about your project' styles={inputStyle} type='text' requried />
            	<button className="btn btn--actionjackson--full" type="submit" styles={inputStyle}><span className="btn__text">Let's make something cool</span> <FaChevronRight size="1.45em" /></button>
             </form>
             </Hero>
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
                      <NavContact onClick={() => this.parallax.scrollTo(2)}>Contact</NavContact>
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
          <Container>
            <Hero>
              <img src={howdy} className="item--contained howdy__main" />
              <BigTitle className="item--contained">
                My name is Matt Trice.
              </BigTitle>
              <Subtitle className="item--contained">I am an Atlanta based UX, prototype, web designer, front end development, from concept to completion from design to deployment full life cycle of the design.</Subtitle>
              <button className="item--contained btn btn--actionjackson">
                <span className="btn__text">Let's make something cool</span> <FaChevronRight size="1.45em" />
              </button>
            </Hero>
          </Container>
        </ParallaxLayer>
      </Parallax>

    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import logofreshtix from '../images/logo-freshtix.svg';
import freshtixshottt from '../images/shottt-freshtix.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import aftereffects from '../images/icon-after-effects.png';
import invision from '../images/icon-invision-white.png';
import illustrator from '../images/icon-illustrator.png';
import sketch from '../images/icon-sketch.png';
import logotd from '../images/logo-td.svg';
import sunrays from '../images/sunraysfromgod.png';
import mobileflow from '../images/ft-mobile-flow.png';
import ftscreens01 from '../images/ft-screens-1.png';
import ftscreens02 from '../images/ft-screens-2.png';
import '../assets/css/krabby.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
  padding: .5rem 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const HeaderWrapper = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0rem;
  grid-template-areas: "Header" "Whitespace";
  @media (max-width: 680px) {
    grid-template-rows: 1fr;
  }
`;
const OceanBG = styled.div`
  background: rgb(0,5,10);
  background: linear-gradient(360deg, rgba(0,5,10,1) 0%, rgba(0,49,98,1) 78%, rgba(0,101,157,1) 100%);
  background-size: cover;
  background-image: url(${sunrays});
  background-repeat: no-repeat;
  background-position: top center;
`;
const WhiteContainer = styled.div`
  background: white;
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const WhiteSpace = styled.div`
  background: white;
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0;
    height: 0;
  }
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
const ProjectHero = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 50% minmax(300px, 1fr);
  grid-template-rows: auto;
  grid-template-areas: ". Image"
                       "Logo Image"
                       "Title Image"
                       "Description Image"
                       "CTA Image"
                       ". Image";
  @media (max-width: 900px) {
   grid-template-columns: 1fr;
   grid-template-rows: 3rem repeat(5, auto) 3rem;
   grid-gap: 0;
   justify-items: center;
   grid-template-areas: "." "Logo" "Title" "Image" "Description" "CTA" ".";
  }
`;
const Bubbles = styled.div``;
const Description = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;
const ProjectCardTitle = styled.h4`
  ${tw('text-white uppercase')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  grid-area: Title;
  @media (max-width: 900px) {
    text-align: center;
  }
`;
const ProjectCardDescription = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
  grid-area: Description;
`;
const ProjectCardCTA = styled.div`
  margin: 2rem 0;
`;
const ProjectContentTop = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1.25fr 0.75fr;
  grid-template-rows: 2rem auto 1fr;
  grid-template-areas: ". ." "Approach Workflow" "Swatches Swatches" "Aside Mobileflow";
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0 auto;
    grid-template-areas: "." "Approach" "Workflow" "Swatches" "Aside" "Mobileflow";
  }
`;
const Approach = styled.div`
  grid-area: Approach;
`;
const Workflow = styled.div`
  grid-area: Workflow;
`;
const ProjectContentMiddle = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-gap: 2rem;
  grid-template-columns: 0.55fr 1.45fr;
  grid-template-rows: 1fr;
  grid-template-areas: "MobileflowText MobileflowImage";
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "MobileflowText" "MobileflowImage";
  }
`;
const MobileflowText = styled.div`
  grid-area: MobileflowText;
  margin-top: 4rem;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;
const MobileflowImage = styled.div`
  grid-area: MobileflowImage;
`;
const WorkflowUL = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;
const WorkflowLI = styled.li`
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: .85rem;
  padding: 6px 6px 6px 0;
`;
const ContentTitle = styled.h4`
  ${tw('uppercase')};
`;
const HeroFreshtix = styled.div`
  position: relative;
  top: 0rem;
  grid-area: Image;
  @media (max-width: 900px) {
    position: relative;
    top: 0;
  }
`;
const Swatches = styled.div`
  grid-area: Swatches;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto 1fr;
  grid-template-areas: "Title Title Title Title" "Cards Cards Cards Cards";
  @media (max-width: 1200px) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "Title Title" "Cards Cards";
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "Title" "Cards";
  }
`;
const ProjectContentBottom = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-gap: 2rem;
  grid-template-columns: 70% 1fr;
  grid-template-rows: auto;
  grid-template-areas: "InterfaceImage InterfaceText";
  align-content: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "InterfaceText" "InterfaceImage";
  }
`;
const ProjectContentBottomAlt = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-gap: 2rem;
  grid-template-columns: 1fr 70%;
  grid-template-rows: auto;
  grid-template-areas: "InterfaceText InterfaceImage";
  align-content: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "InterfaceText" "InterfaceImage";
  }
`;
const InterfaceImage = styled.div`
  grid-area: InterfaceImage;
`;
const InterfaceText = styled.div`
  grid-area: InterfaceText;
  margin-top: 4rem;
  @media (max-width: 680px) {
    margin-top: 0;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr;
  height: 200px;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
const FooterBottom = styled.div`
  display: grid;
  grid-template-rows: 8rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 680px) {
    grid-template-rows: 4rem;
  }
`;
const MobileContact = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    margin-top: 4rem;
    border-bottom: 2px solid #CCC;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;




class App extends React.Component {
  render() {
    return (
      <div style={{ display: 'grid', overflowX: 'hidden', gridGap: '0' }}>

        <HeaderWrapper>
          <OceanBG>
            <HeaderContainer className="header__container">
              <Navigation>
                <ul className="nav__main">
                  <li>
                    <Link to="/"><img src={logotd} className="logo__main" /></Link>
                  </li>
                  <li style={{ display: 'grid', alignItems: 'center' }}>
                    <ul className="social-icons">
                      <li className="contact">
                        <Link to="/contact">Contact</Link>
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
                <HeroFreshtix><img src={freshtixshottt} className="shottt-freshtix" /></HeroFreshtix>
                <img src={logofreshtix} style={{ gridArea: 'Logo' }} />
                <ProjectCardTitle>PRODUCT DESIGN, MOBILE APP DESIGN, UI & UX, PROTOTYPING</ProjectCardTitle>
                <ProjectCardDescription>FreshTix makes is easier to sell tickets online with their free ticketing software.
                </ProjectCardDescription>
                <ProjectCardCTA style={{ gridArea: 'CTA' }}>
                  <a href="https://projects.invisionapp.com/share/23EEA8BQG#/screens/" className="hero__cta"><img src={invision} alt="InVision" className="cta__icon" /> View Prototype</a>
                </ProjectCardCTA>
              </ProjectHero>
            </Container>
          </OceanBG>
          <WhiteSpace />
        </HeaderWrapper>

        <WhiteContainer>
          <ProjectContentTop>
            <Approach>
              <ContentTitle>Challenge</ContentTitle>
              <p>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this admin facing app allows an event organizer to check in participants using QR codes and provides the organizer with attendance data.</p>
              <p>The current app lacked a thoughtful, user experience centered design, and overall showcased an outdated visual design. The app had confusing and unnecessary features and some higher level accessibility problems. In order to update the app and move it forward a complete redesign and a complete rebuild would be necessary.</p>
            </Approach>
            <Workflow>
              <ContentTitle>Workflow</ContentTitle>
              <WorkflowUL>
                <WorkflowLI><img src={sketch} alt="Sketch" className="workflow__icon" />Sketch</WorkflowLI>
                <WorkflowLI><img src={invision} alt="Invision" className="workflow__icon" />Invision</WorkflowLI>
              </WorkflowUL>
            </Workflow>

          </ProjectContentTop>
          <ProjectContentMiddle>
            <MobileflowText>
              <ContentTitle>Process</ContentTitle>
              <p>First, we met with the client for an exploratory session. This allowed us to get to know their pain points. I then mapped out the current app’s flow.</p>
              <p>Mapping out the flow allowed me to identify unnecessary steps and ways to streamline the check in process.</p>
            </MobileflowText>
            <MobileflowImage>
              <img src={mobileflow} style={{ gridArea: 'Mobileflow', maxWidth: '100%', padding: '1rem' }} />
            </MobileflowImage>
          </ProjectContentMiddle>
          <ProjectContentBottom>
            <InterfaceText>
              <ContentTitle>Design</ContentTitle>
              <p>From here I began the visual design process; presenting multiple versions to the client for approval. I worked closely with the engineers in order to keep the functionality on track and to stay within the framework.</p>
              <p>After multiple iterations, I received approval and created a prototype that served as a foundation for development and visual aid for the client.</p>
            </InterfaceText>
            <InterfaceImage>
              <img src={ftscreens01} style={{ gridArea: 'InterfaceImage', maxWidth: '100%' }} />
            </InterfaceImage>
          </ProjectContentBottom>
          <ProjectContentBottomAlt>
            <InterfaceText>
              <ContentTitle>Solution</ContentTitle>
              <p>I designed a cleaner and more contemporary look while staying within the existing Freshtix brand. By identifying unnecessary and useless functions I was able to reduce clutter as well as streamline the check in process.</p>
            </InterfaceText>
            <InterfaceImage>
              <img src={ftscreens02} style={{ gridArea: 'InterfaceImage', maxWidth: '100%' }} />
            </InterfaceImage>
          </ProjectContentBottomAlt>
          <MobileContact>
            <Link to="/contact">
              <ButtonCTA className="btn btn--actionjackson"><span className="btn__text">Contact Me</span> <FaPaperPlane size="1.45em" /></ButtonCTA>
            </Link>
          </MobileContact>
          <FooterLinks>
            <Link to="/topaz" className="btn--textOnly">
              <FaChevronLeft size="1.45em" /><span className="btn__text"> Prev Project</span>
            </Link>
            <Link to="/robit" className="btn--textOnly">
              <span className="btn__text">Next Project </span><FaChevronRight size="1.45em" />
            </Link>
          </FooterLinks>
        </WhiteContainer>
        <FooterBottom>
          <p style={{ color: 'white', fontSize: '.65em' }}>Copyright &copy; 2019 trice.design</p>
        </FooterBottom>
      </div>
    )
  }
}

export default App;

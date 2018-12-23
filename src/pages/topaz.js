import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import logotopaz from '../images/logo-topaz.svg';
import topazshottt from '../images/shottt-topaz.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import icongatsby from '../images/icon-gatsby.png';
import sketch from '../images/icon-sketch.png';
import logotd from '../images/logo-td.svg';
import sunrays from '../images/sunraysfromgod.png';
import screensketch from '../images/screens-sketch-topaz.png';
import siteflow from '../images/siteflow-topaz.svg';
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
  grid-template-columns: 1.25fr .75fr;
  grid-template-rows: 2rem auto;
  grid-template-areas: ". ." "Approach Workflow";
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0 auto;
    grid-template-areas: "." "Approach" "Workflow";
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
  margin-top: 3rem;
  grid-gap: 2rem;
  grid-template-columns: 4rem 40% 1fr 4rem;
  grid-template-rows: 1fr;
  grid-template-areas: ". ProjectMiddleImageTop ProjectMiddleText .";
  @media (max-width: 1330px) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "ProjectMiddleImageTop ProjectMiddleText";
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "ProjectMiddleText" "ProjectMiddleImageTop";
  }
`;
const ProjectMiddleText = styled.div`
  grid-area: ProjectMiddleText;
  margin-top: 4rem;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
  @media (max-width: 800px) {
    margin-top: 0;
  }
`;
const ProjectMiddleImageTop = styled.div`
  grid-area: ProjectMiddleImageTop;
`;
const ProjectMiddleImageBottom = styled.div`
  grid-area: ProjectMiddleImageBottom;
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
const HeroPayscape = styled.div`
  position: relative;
  top: 0rem;
  grid-area: Image;
  @media (max-width: 900px) {
    position: relative;
    top: 0;
  }
`;
const ProjectContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 8rem);
  align-items: center;
  justify-items: left;
  @media (max-width: 680px) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto 1fr;
  }
`;
const ProjectContentBottom = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-gap: 2rem;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:  "ProjectBottomText ProjectBottomImage";
  align-content: center;
  @media (max-width: 800px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "ProjectBottomText" "ProjectBottomImage";
  }
`;
const ProjectBottomImage = styled.div`
  grid-area: ProjectBottomImage;
`;
const ProjectBottomText = styled.div`
  grid-area: ProjectBottomText;
  margin-top: 0;
  @media (max-width: 680px) {
    margin-top: 0;
  }
`;
const Caption = styled.p`
  text-align: left;
  font-size: .65rem;
  display: block;
  width: 8rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
                <HeroPayscape><img src={topazshottt} className="shottt-topaz" /></HeroPayscape>
                <img src={logotopaz} style={{ gridArea: 'Logo' }} />
                <ProjectCardTitle>WEB DESIGN, UX DEVELOPMENT</ProjectCardTitle>
                <ProjectCardDescription>Topaz is a blockchain SaaS product. Working alongside a talented branding designer, I designed and developed a single page static site running on <span>Gatsby.js</span> and React.
                </ProjectCardDescription>
                <ProjectCardCTA style={{ gridArea: 'CTA' }} >
                  <a href="https://topaz.io" className="hero__cta"> Check out the site <FaChevronRight size="1.45em" style={{ marginLeft: '.5rem' }} /></a>
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
              <p>Topaz needed a marketing site to announce their upcoming launch. This site needed to be scalable and play well with the Topaz product. Gatsby.js was a perfect fit.</p>
            </Approach>
            <Workflow>
              <ContentTitle>Workflow</ContentTitle>
              <WorkflowUL>
                <WorkflowLI><img src={sketch} alt="Sketch" className="workflow__icon" />Sketch</WorkflowLI>
                <WorkflowLI><img src={icongatsby} alt="Gatsby" className="workflow__icon" />Gatsby.js</WorkflowLI>
              </WorkflowUL>
            </Workflow>
          </ProjectContentTop>

          <ProjectContentMiddle>
            <ProjectMiddleText>
              <ContentTitle>Process</ContentTitle>
              <p>We had a tight turnaround on this one and had to hit a hard deadline launch date. No problem. I partnered with a branding designer who created the logo and overall look and feel while I concurrently designed and developed the site.</p>
              <Caption>Pages courtesy of Topaz Brand Style Guide, designed by <a href="https://dribbble.com/nsherrill">@NSherrill</a></Caption>
            </ProjectMiddleText>
            <ProjectMiddleImageTop>
              <img src={screensketch} className="topaz_screens" />
            </ProjectMiddleImageTop>
          </ProjectContentMiddle>
          <ProjectContentBottom>
            <ProjectBottomText>
              <ContentTitle>Results</ContentTitle>
              <p>We did it. The site went live prior to launch and is ready to scale.</p><p>Development next steps include scoping out large documentation style site for the API.</p>
            </ProjectBottomText>
            <ProjectBottomImage>
              <img src={siteflow} className="topaz_siteflow" alt="Site flow" />
            </ProjectBottomImage>
          </ProjectContentBottom>
          <MobileContact>
            <Link to="/contact">
              <ButtonCTA className="btn btn--actionjackson"><span className="btn__text">Contact Me</span> <FaPaperPlane size="1.45em" /></ButtonCTA>
            </Link>
          </MobileContact>
          <FooterLinks>
            <a className="btn--textOnly__disabled">
              <FaChevronLeft size="1.45em" /><span className="btn__text"> Prev Project</span>
            </a>
            <Link to="/freshtix" className="btn--textOnly">
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

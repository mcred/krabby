import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import logopayscape from '../images/logo-payscape.svg';
import payscapeshottt from '../images/shottt-payscape.png';
import illustrator from '../images/icon-illustrator.png';
import sketch from '../images/icon-sketch.png';
import sunrays from '../images/sunraysfromgod.png';
import screens01 from '../images/payscape-screens-1.png';
import screens02 from '../images/payscape-screens-2.png';
import iconwebsites from '../images/icon-websites-circlebg.svg';
import iconmobile from '../images/icon-mobile-circlebg.svg';
import iconpos from '../images/icon-pos-circlebg.svg';
import iconinvoice from '../images/icon-invoice-circlebg.svg';
import iconregistration from '../images/icon-registration-circlebg.svg';
import iconecommerce from '../images/icon-ecommerce-circlebg.svg';
import '../assets/css/krabby.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';




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
  grid-template-columns: 2rem 40% 1fr 2rem;
  grid-template-rows: 1fr;
  grid-template-areas: ". ProjectMiddleText ProjectMiddleImage .";
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "ProjectMiddleText" "ProjectMiddleImage";
  }
`;
const ProjectMiddleText = styled.div`
  grid-area: ProjectMiddleText;
  margin-top: -1rem;
  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;
const ProjectMiddleImage = styled.div`
  grid-area: ProjectMiddleImage;
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
  grid-template-columns: 2rem 40% 1fr 2rem;
  grid-template-rows: 1fr;
  grid-template-areas: ". ProjectBottomImage ProjectBottomText .";
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
        <Helmet>
          <title>Payscape | Matt Trice Design | trice.design | UX Design, Front End Development</title>
          <meta name="description" content="The Payscape site needed a visual overhaul as well as a more user-friendly content management system." />
        </Helmet>
        <HeaderWrapper>
          <OceanBG>
            <HeaderContainer className="header__container">
              <Navigation />
            </HeaderContainer>
            <Container>
              <ProjectHero>
                <HeroPayscape><img src={payscapeshottt} className="shottt-payscape" /></HeroPayscape>
                <img src={logopayscape} style={{ gridArea: 'Logo' }} />
                <ProjectCardTitle>WEBSITE DESIGN, UI & UX, WORDPRESS DESIGN</ProjectCardTitle>
                <ProjectCardDescription>Payscape provides small to mid-size business owners with financial technologies that allow them to accept payments, streamline their business, and increase cash flow.</ProjectCardDescription>
                <ProjectCardCTA style={{ gridArea: 'CTA' }}>
                  <a href="https://payscape.com" className="hero__cta"> Check out the site <FaChevronRight size="1.45em" style={{ marginLeft: '.5rem' }} /></a>
                </ProjectCardCTA>
              </ProjectHero>
            </Container>
          </OceanBG>
          <WhiteSpace />
        </HeaderWrapper>

        <WhiteContainer>
          <ProjectContentTop>
            <Approach>
              <ContentTitle>Approach</ContentTitle>
              <p>The old Payscape.com was in need of a redesign and restructure. The old look was getting stale, lacked depth, and was showing it's age.</p>
              <p>Also, even though the site was built in a CMS, it was not easy for users to make changes to the content. The site needed a visual overhaul as well as a more user-friendly content management system.</p>
            </Approach>
            <Workflow>
              <ContentTitle>Workflow</ContentTitle>
              <WorkflowUL>
                <WorkflowLI><img src={sketch} alt="Sketch" className="workflow__icon" />Sketch</WorkflowLI>
                <WorkflowLI><img src={illustrator} alt="Illustrator" className="workflow__icon" />Illustrator</WorkflowLI>
              </WorkflowUL>
            </Workflow>
          </ProjectContentTop>
          <ContentTitle>New Iconography</ContentTitle>
          <ProjectContentGrid>
            <img src={iconwebsites} alt="Websites" className="iconography" />
            <img src={iconmobile} alt="Mobile" className="iconography" />
            <img src={iconpos} alt="POS" className="iconography" />
            <img src={iconinvoice} alt="Invoice" className="iconography" />
            <img src={iconregistration} alt="Registration" className="iconography" />
            <img src={iconecommerce} alt="Ecommerce" className="iconography" />
          </ProjectContentGrid>
          <ProjectContentMiddle>
            <ProjectMiddleText>
              <ContentTitle>Process</ContentTitle>
              <p>I discovered current pain points by meeting with marketing and collecting feedback from various departments throughout the company.</p>
              <p>As I began to look at the existing content as a whole I compared the sitemap against analytics and heat map data in order to identify opportunities to re-organize and streamline the content.</p>
            </ProjectMiddleText>
            <ProjectMiddleImage>
              <img src={screens01} className="payscape_screens01" style={{ gridArea: 'ProjectMiddleImage' }} />
            </ProjectMiddleImage>
          </ProjectContentMiddle>
          <ProjectContentBottom>
            <ProjectBottomText>
              <ContentTitle>Solution</ContentTitle>
              <p>From a visual standpoint I wanted to bring the look and feel up to modern trends. I got away from the full screen video background to a cleaner illustration style and lifestyle photo style.</p>
            </ProjectBottomText>
            <ProjectBottomImage>
              <img src={screens02} className="payscape_screens02" style={{ gridArea: 'ProjectBottomImage' }} />
            </ProjectBottomImage>
          </ProjectContentBottom>
          <FooterLinks>
            <Link to="/robit" className="btn--textOnly">
              <FaChevronLeft size="1.45em" />Prev Project
            </Link>
            <a className="btn--textOnly__disabled">
              Next Project<FaChevronRight size="1.45em" />
            </a>
          </FooterLinks>
        </WhiteContainer>
        <Footer />
      </div>
    )
  }
}

export default App;

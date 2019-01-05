import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring  } from 'react-spring';
import { animated as a, Keyframes } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';
import SVG from '../components/SVG';
import Bubbles from '../components/Bubbles';
import '../styles/global';
import styled from 'react-emotion';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import logotopaz from '../images/logo-topaz.svg';
import logofreshtix from '../images/logo-freshtix.svg';
import logorobit from '../images/logo-robit.svg';
import logopayscape from '../images/logo-payscape.svg';
import logotd from '../images/logo-td.svg';
import bottomburm from '../images/bottom-burm.svg';
import howdy from '../images/howdy.svg';
import anglerbright from '../images/angler-bright.png';

import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import FloatingLabel, { floatingStyles, focusStyles, inputStyles, labelStyles, spanStyles, buttonStyles, textareaStyles } from 'floating-label-react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
  padding: .5rem 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const SunRaysfromGod = styled(ParallaxLayer)``;
const TheOceanfromGod = styled(ParallaxLayer)`
  background: rgb(0,3,92);
  background: linear-gradient(360deg, rgba(0,3,92,1) 0%, rgba(0,56,75,1) 100%);
`;
const BodyContent = styled(ParallaxLayer)`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10rem;
  grid-template-areas: "Top"
                       "Footer";
`;
const AnglerLayer = styled(ParallaxLayer)``;
const Angler = styled.div`
  position: relative;
  left: 2rem;
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
const OceanBG = styled(ParallaxLayer)`
`;
const Container = styled.div`
  padding: 0 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const ButtonCTA = styled.button``;
const Hero = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  grid-template-rows: 4rem repeat(4, auto) 6rem;
  grid-template-columns: 12rem 1fr 12rem;
  grid-template-areas: ". . ."
                       ". HeroHowdy ."
                       ". HeroBigtitle ."
                       ". HeroSubtitle ."
                       ". HeroLink .";
                       ". . ."
   @media (max-width: 1400px) {
     grid-template-columns: 6rem 1fr 6rem;
   }
   @media (max-width: 1150px) {
     grid-template-columns: 2rem 1fr 2rem;
   }
   @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4rem repeat(4, auto);
    grid-gap: .25rem;
    grid-template-areas: "."
                         "HeroHowdy"
                         "HeroBigtitle"
                         "HeroSubtitle"
                         "HeroLink";
   }
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
const ProjectWrapperImageRight = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 4rem 1fr 2rem auto 1fr 4rem;
  grid-template-areas: ". ."
                       ". Image"
                       "Title Image"
                       "Description Image"
                       ". Image"
                       ". .";
  @media (max-width: 900px) {
   grid-template-columns: 1fr;
   grid-template-rows: 2rem repeat(3, auto) 2rem;
   grid-gap: .25rem;
   grid-template-areas: "." "Title" "Image" "Description" ".";
  }
`;
const ProjectWrapperImageLeft = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 4rem 1fr 2rem auto 1fr 4rem;
  grid-template-areas: ". ."
                       "Image ."
                       "Image Title"
                       "Image Description"
                       "Image ."
                       ". .";
  @media (max-width: 900px) {
   grid-template-columns: 1fr;
   grid-template-rows: 2rem repeat(3, auto) 2rem;
   grid-gap: .25rem;
   grid-template-areas: "." "Title" "Image" "Description" ".";
  }
`;
const ProjectCardTitle = styled.h4`
  ${tw('text-white uppercase')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;
const ProjectCardDescription = styled.p`
  ${tw('text-white')};
  line-height: 1.45em;
`;
const MobileContact = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Cuntainer = Keyframes.Spring({
  show: { opacity: 1 },
  showAndHide: [{ opacity: 1 }, { opacity: 0 }],
  wiggle: async (next, cancel, ownProps) => {
    await next({ x: 100, config: config.wobbly })
    await delay(1000)
    await next({ x: 0, config: config.gentle })
    while (true)
        await next({ opacity: 1, from: { opacity: 0 }, reset: true })
  }
})




class App extends React.Component {
  render() {
    return (
      <div>

        <Parallax ref={ref => (this.parallax = ref)} pages={9}>
          <Helmet>
            <title>Matt Trice Design | trice.design | UX Design, Front End Development</title>
            <meta name="description" content="I am an Atlanta based designer specializing in UI and Web Design, UX Development, and prototyping." />
          </Helmet>
          <TheOceanfromGod offset={0} speed={0} factor={9} />
          <SunRaysfromGod offset={0} speed={.25} factor={6}>
            <Img alt={'Sun rays from God'} fluid={this.props.data.imageSunRays.childImageSharp.fluid} />
          </SunRaysfromGod>

          <Bubbles />
          <ParallaxLayer offset={4.2} speed={-0.45} style={{ display: 'grid', justifyContent: 'right', height: 'auto' }}>
            <Img alt={'The infamous squid lurking in the background'} fluid={this.props.data.imageSquid.childImageSharp.fluid} className="squid-silhouette" />
          </ParallaxLayer>


          <BodyContent offset={0} speed={0} factor={9}>
            <Container>
              <Hero>
                <img alt="Howdy, Partner!" src={howdy} className="howdy__main" style={{ gridArea: "HeroHowdy" }} />
                <BigTitle style={{ gridArea: "HeroBigtitle" }} >
                  My name is Matt Trice.


                </BigTitle>
                <Subtitle style={{ gridArea: "HeroSubtitle" }} >I am an Atlanta based designer specializing in UI and Web Design, UX Development, and prototyping. From concept to completion, I love having a hand in the full life cycle of an idea.


                </Subtitle>
                <Link to="/contact" style={{ gridArea: "HeroLink" }} >
                  <ButtonCTA className="btn btn--actionjackson"><span className="btn__text">Let's make something cool</span> <FaChevronRight size="1.45em" /></ButtonCTA>
                </Link>
              </Hero>
              <ProjectWrapperImageRight>
                <Img alt={'Topaz Designs'} fluid={this.props.data.imageShotttTopaz.childImageSharp.fluid} className="shottt-topaz--home" imgStyle={{ objectFit: "contain" }} />
                <ProjectCardTitle className="project__title">WEB DESIGN, UX DEVELOPMENT</ProjectCardTitle>
                <ProjectCardDescription className="project__description">
                  <img alt="Logo for Topaz" src={logotopaz} className="project__logo" /><br />
                  Topaz is a blockchain SaaS product. Working alongside a talented branding designer, I designed and developed a single page static site running on <span>Gatsby.js</span> and React.<br />
                  <Link to="/topaz">
                    <button className="btn btn--actionjackson">
                      <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                    </button>
                  </Link>
                </ProjectCardDescription>
              </ProjectWrapperImageRight>
              <ProjectWrapperImageLeft>
                <Img alt={'Freshtix designs mocked up in hardware'} fluid={this.props.data.imageShotttFreshtix.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }}  style={{ gridArea: "Image" }} />
                <ProjectCardTitle className="project__title">PRODUCT DESIGN, MOBILE APP DESIGN, UI & UX, PROTOTYPING</ProjectCardTitle>
                <ProjectCardDescription className="project__description">
                  <img alt="Logo for Freshtix" src={logofreshtix} className="project__logo" /><br />
                  This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
                  <Link to="/freshtix">
                    <button className="btn btn--actionjackson">
                      <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                    </button>
                  </Link>
                </ProjectCardDescription>
              </ProjectWrapperImageLeft>
              <ProjectWrapperImageRight>
                <Img alt={'Robit designs mocked up in hardware'} fluid={this.props.data.imageShotttRobit.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }}  style={{ gridArea: "Image" }} />
                <ProjectCardTitle className="project__title">APP CONCEPT, PRODUCT DESIGN, UI & UX, PROTOTYPE</ProjectCardTitle>
                <ProjectCardDescription className="project__description">
                  <img alt="Logo for Robit" src={logorobit} className="project__logo" /><br />
                  Robit is an app that aims to introduce design thinking with board style organization. Being able to see where your idea sits in it’s creative lifecycle will help move it to completion<br />
                  <Link to="/robit">
                    <button className="btn btn--actionjackson">
                      <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                    </button>
                  </Link>
                </ProjectCardDescription>
              </ProjectWrapperImageRight>
              <ProjectWrapperImageLeft>
                <Img alt={'Payscape designs mocked up in hardware'} fluid={this.props.data.imageShotttPayscape.childImageSharp.fluid} imgStyle={{ objectFit: "contain" }}  style={{ gridArea: "Image" }} />
                <ProjectCardTitle className="project__title">WEBSITE DESIGN, UI & UX, WORDPRESS DESIGN</ProjectCardTitle>
                <ProjectCardDescription className="project__description">
                  <img alt="logo for Payscape" src={logopayscape} className="project__logo" /><br />
                  Payscape is an Atlanta based Financial Technology company that provides small to mid-size business owners with financial technologies that allow them to accept payments, streamline their business, and increase cash flow.<br />
                  <Link to="/payscape">
                    <button className="btn btn--actionjackson">
                      <span className="btn__text">Case Study</span> <FaChevronRight size="1.45em" />
                    </button>
                  </Link>
                </ProjectCardDescription>
              </ProjectWrapperImageLeft>
            </Container>
            <Footer />
          </BodyContent>



          <AnglerLayer offset={8.15} speed={-0.15}>
            <Angler className={'anglerFish'}>
              <img alt="This is an illuminated Angler Fish" className="bottom" src={anglerbright} />
            </Angler>
          </AnglerLayer>

          <ParallaxLayer offset={0} speed={1}>
            <HeaderContainer className="header__container">
              <Navigation />
            </HeaderContainer>
          </ParallaxLayer>




        </Parallax>

      </div>
    )
  }
}

export default App

export const pageQuery = graphql`
query {
imageSunRays: file(relativePath: { eq: "sunraysfromgod.png" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttTopaz: file(relativePath: { eq: "shottt-topaz.png" }) {
  childImageSharp {
    fluid(maxWidth: 800) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttFreshtix: file(relativePath: { eq: "shottt-freshtix.png" }) {
  childImageSharp {
    fluid(maxWidth: 800) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttRobit: file(relativePath: { eq: "shottt-robit.png" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageShotttPayscape: file(relativePath: { eq: "shottt-payscape.png" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
imageSquid: file(relativePath: { eq: "squid-silhouette.png" }) {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
      }
    }
  }
}
`

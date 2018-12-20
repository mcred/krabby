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
import aftereffects from '../images/icon-after-effects.png';
import framer from '../images/icon-framer.png';
import illustrator from '../images/icon-illustrator.png';
import sketch from '../images/icon-sketch.png';
import logotd from '../images/logo-td.svg';
import sunrays from '../images/sunraysfromgod.png';
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
const SunRaysfromGod = styled(ParallaxLayer)``;
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
const HeaderWrapper = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2rem;
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
   grid-template-rows: 3rem repeat(4, auto) 3rem;
   grid-gap: 0;
   justify-items: center;
   grid-template-areas: "." "Logo" "Title" "Image" "Description" ".";
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
const ProjectContent = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1.25fr 0.75fr;
  grid-template-rows: 2rem 1fr 1fr;
  grid-template-areas: ". ." "Approach Workflow" "Swatches Swatches";
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0 auto;
    grid-template-areas: "." "Approach" "Workflow" "Swatches";
  }
`;
const Approach = styled.div`
  grid-area: Approach;
`;
const Workflow = styled.div`
  grid-area: Workflow;
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
const HeroTopaz = styled.div`
  position: relative;
  top: 3rem;
  grid-area: Image;
  @media (max-width: 900px) {
    position: relative;
    top: 0;
  }
`;
const Swatches = styled.div`
  grid-area: Swatches;

`;







class App extends React.Component {
  render() {
    return (
      <div style={{display: 'grid', overflowX: 'hidden', gridGap: '0' }}>

        <HeaderWrapper>
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
              <ProjectHero>
                <HeroTopaz><img src={topazshottt} className="shottt-topaz" /></HeroTopaz>
                <img src={logotopaz} style={{ gridArea: 'Logo' }} />
                <ProjectCardTitle>UX DESIGN, FRONT END DEVELOPMENT</ProjectCardTitle>
                <ProjectCardDescription>This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.<br />
                </ProjectCardDescription>
              </ProjectHero>
            </Container>
          </OceanBG>
          <WhiteSpace />
        </HeaderWrapper>

        <WhiteContainer>
          <ProjectContent>
            <Approach>
              <ContentTitle>Approach</ContentTitle>
              <p>Being able to see where your idea sits in it’s creative lifecycle will help move it to completion. As a designer, I often times would find myself with  great ideas but would hit creative roadblocks when it came time to start creating.</p>
            </Approach>
            <Workflow>
              <ContentTitle>Workflow</ContentTitle>
              <WorkflowUL>
                <WorkflowLI><img src={sketch} alt="Sketch" className="workflow__icon" />Sketch</WorkflowLI>
                <WorkflowLI><img src={illustrator} alt="Illustrator" className="workflow__icon" />Illustrator</WorkflowLI>
                <WorkflowLI><img src={aftereffects} alt="After Effects" className="workflow__icon" />After Effects</WorkflowLI>
                <WorkflowLI><img src={framer} alt="Framer" className="workflow__icon" />Framer</WorkflowLI>
              </WorkflowUL>
            </Workflow>
            <Swatches>
              <div className="card__swatch">
                <div className="card__swatch--define"></div>
                <span className="swatch__description">#D81159<br />rgba (216,17,89,100)</span>
              </div>

              <div className="card__swatch">
                <div className="card__swatch--ideate"></div>
                <span class="swatch__description">#246AFF<br />rgba (36,106,255,100)</span>
              </div>

              <div className="card__swatch">
                <div className="card__swatch--create"></div>
                <span className="swatch__description">#00AA00<br />rgba (0,170,0,100)</span>
              </div>

              <div className="card__swatch">
                <div className="card__swatch--finalize"></div>
                <span className="swatch__description">#E22E42<br />rgba (226,46,66,100)</span>
              </div>
            </Swatches>
          </ProjectContent>
        </WhiteContainer>

      </div>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
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
import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
`;
const Navigation = styled.div`
  ${tw('w-full')};
  padding-bottom:0;
`;
const Jump = styled.p`

`;

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 50%;
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4}>
        <HeaderContainer className="header__container">
          <Navigation>
            <ul className="nav__main">
              <li>
                <img src={logotd} className="logo__main" />
              </li>
              <li>
                <ul className="social-icons">
                  <li className="contact">
                    <Jump onClick={() => this.parallax.scrollTo(2)}>Contact</Jump>
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
        <ParallaxLayer offset={0} speed={1} className="click-through">
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
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
          <ProjectsWrapper>
            <ProjectCardText
              title="UX DESIGN, FRONT END DEVELOPMENT"
              link="topaz"
            >
              This project was a redesign and rebuild of their attendee check in app. As part of their free ticketing software, this app allows an event organizer to check in participants and provides the organizer with attendance data.
            </ProjectCardText>
            <div>
              <img src={topazshottt} className="shottt-topaz" />
            </div>
          </ProjectsWrapper>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Link } from "gatsby";
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import Contact from '../components/Contact';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';
import squidsilhouette from '../images/squid-silhouette.png';
import '../assets/css/krabby.scss';
import { FaPaperPlane } from 'react-icons/fa';
import FloatingLabel, { floatingStyles, focusStyles, inputStyles, labelStyles, spanStyles, buttonStyles, textareaStyles } from 'floating-label-react';


const HeaderContainer = styled.div`
  ${tw('justify-center items-center flex z-50')};
  padding: .5rem 4rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const FormTitle = styled.h3`
  ${tw('text-white mb-0')};
  text-shadow: -2px 4px 32px rgba(0, 0, 0, .125);
  font-size: 2rem;
  font-family: 'Abril Fatface', cursive;
  color: #FFEE00;
  margin-top: 4rem;
  @media (max-width: 767px) {
    font-size: 1.85em;
    margin-top: 4rem;
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
    fontFamily: 'Source Serif Pro, serif',
    fontWeight: '700',
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
    fontFamily: 'Oswald, sans-serif',
    fontWeight: '700',
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




class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={1.5}>
        <OceanBG offset={0} speed={0} factor={2} className={'oceanbg'}   />
        <ParallaxLayer offset={1} speed={0.1} factor={2}>
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
        <ParallaxLayer offset={1} speed={0.1} factor={2}>
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
        <ParallaxLayer offset={0.35} speed={-0.45} style={{ display: 'grid', justifyContent: 'right' }}>
          <img src={squidsilhouette} className="squidSilhouette" />
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
          <Container>
            <Hero>
              <FormTitle className="item--contained">Let's have a conversation</FormTitle>
              <form className="contact__form item--contained"  name="contact" method="post" action="https://formspree.io/matt@trice.design" method="POST">
                <FloatingLabel id='name' name='name' placeholder='Name' type='text' styles={inputStyle} required />
                <FloatingLabel id='email' name='email' placeholder='Email' type='email' styles={inputStyle} required />
                <FloatingLabel id='comments' name='comments' placeholder='What are you working on?' styles={inputStyle} type='text' maxlength={10} requried />
                <button className="btn btn--actionjackson--full" type="submit" styles={inputStyle}><span className="btn__text">Send message</span> <FaPaperPlane size="1.45em" /></button>
              </form>
            </Hero>
          </Container>
        </ParallaxLayer>
      </Parallax>
    )
  }
}

export default App;

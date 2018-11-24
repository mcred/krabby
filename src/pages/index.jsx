/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpBubblesOne, UpBubblesOneTop, UpBubblesTwo, UpBubblesTwoTop, UpBubblesThree, UpBubblesThreeTop, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import '../styles/global';

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

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`

`;

const HeroContent = styled(ParallaxLayer)`
  ${tw('justify-center items-top flex z-50')};
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-white mb-6')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-size: 4em;
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 3em;
   }
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

`;

const Subtitle = styled.p`
  ${tw('text-white mt-8')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const HeroTextLink = styled.a`

`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />

    <Parallax pages={5}>
      <HeaderContainer className="header__container">
        <Navigation>
          <ul className="nav__main">
            <li>
              <div className="logo__main"></div>
            </li>

            <li>
              <ul className="social-icons">
                <li className="contact">
                  <a href="contact" title="">Contact</a>
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
      <Divider speed={0.2} offset={0} className="click-through">
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
      </Divider>
      <HeroContent speed={0.4} offset={0} className="hero-padding">
        <Hero>
          <BigTitle>
            My name is Matt Trice.
          </BigTitle>
          <Subtitle>I am an Atlanta based UX, prototype, web designer, front end development, from concept to completion from design to deployment full life cycle of the design.</Subtitle>
          <button class="btn btn--actionjackson btn-spinner">
            <span class="btn__text">Let's make something cool</span> <FaChevronRight size="1.45em" />
          </button>
        </Hero>
      </HeroContent>
      <DividerMiddle
        speed={-0.2}
        offset={1}
        factor={2}
        className={'background-01'}
      />
      <Divider speed={0.1} offset={1} factor={2}>


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


      </Divider>
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>

        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>




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




      </Divider>
      <Divider speed={0.1} offset={3}>


      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>Headline</Title>
          <AboutHero>

            <AboutSub>

            </AboutSub>
          </AboutHero>
          <AboutDesc>

          </AboutDesc>
        </Inner>
      </Content>

      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 Trice Design, LLC{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
      </Content>
      <Divider speed={0.2} offset={4} className={'foreground--coral'}>
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
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;

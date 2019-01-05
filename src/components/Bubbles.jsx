import React, { Component, Fragment } from 'react';
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



class TheBubbly extends Component {
  render() {
    return (
      <Fragment>

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
      <ParallaxLayer offset={2.5} speed={0.1} factor={2}>
        <UpBubblesOne>
          <SVG icon="bubble" width={3} left="76%" top="28%" />
          <SVG icon="bubble" width={2} left="60%" top="38%" />
          <SVG icon="bubble" width={4} left="82%" top="30%" />
        </UpBubblesOne>
        <UpBubblesTwo>
          <SVG icon="bubble" width={4} left="74%" top="30%" />
          <SVG icon="bubble" width={3} left="61%" top="14%" />
          <SVG icon="bubble" width={2} left="49%" top="11%" />
        </UpBubblesTwo>
        <UpBubblesThree>
          <SVG icon="bubble" width={2} left="52%" top="22%" />
          <SVG icon="bubble" width={4} left="38%" top="44%" />
          <SVG icon="bubble" width={3} left="46%" top="21%" />
        </UpBubblesThree>
      </ParallaxLayer>
      <ParallaxLayer offset={3.5} speed={0.1} factor={2}>
        <UpBubblesOne>
          <SVG icon="bubble" width={3} left="36%" top="32%" />
          <SVG icon="bubble" width={2} left="20%" top="34%" />
          <SVG icon="bubble" width={4} left="42%" top="33%" />
        </UpBubblesOne>
        <UpBubblesTwo>
          <SVG icon="bubble" width={4} left="34%" top="32%" />
          <SVG icon="bubble" width={3} left="21%" top="34%" />
          <SVG icon="bubble" width={2} left="39%" top="31%" />
        </UpBubblesTwo>
        <UpBubblesThree>
          <SVG icon="bubble" width={2} left="12%" top="32%" />
          <SVG icon="bubble" width={4} left="38%" top="34%" />
          <SVG icon="bubble" width={3} left="16%" top="31%" />
        </UpBubblesThree>
      </ParallaxLayer>
      <ParallaxLayer offset={5.5} speed={0.1} factor={2}>
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
      <ParallaxLayer offset={4.5} speed={0.1} factor={2}>
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
    
      <ParallaxLayer offset={8} speed={-0.75} factor={1} className={'background-01'} />
      <ParallaxLayer offset={7} speed={-0.25} factor={2} className={'background--cliffs'}>
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

      </Fragment>
    );
  }
}

export default TheBubbly

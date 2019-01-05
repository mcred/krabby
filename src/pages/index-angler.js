import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import '../styles/global';
import styled from 'react-emotion';
import '../assets/css/krabby.scss';
import { FaChevronRight } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Anglerfish from '../components/Angler';
const OceanBG = styled(ParallaxLayer)`
`;



class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={6}>
        <OceanBG offset={0} speed={0} factor={2} className={'oceanbg'}   />
        <ParallaxLayer speed={0.5} offset={0}>
          <Anglerfish />

        </ParallaxLayer>
      </Parallax>

    )
  }
}

export default App

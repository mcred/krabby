import React from 'react';
import ReactDOM from 'react-dom';
import SVG from '../components/SVG';
import '../styles/global';
import styled from 'react-emotion';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import logotd from '../images/logo-td.svg';
import sunrays from '../images/sunraysfromgod.png';
import '../assets/css/krabby.scss';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';




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




class Nav extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Nav

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
import { Link } from 'gatsby';




const FooterBottom = styled.div`
  background: black;
  display: grid;
  grid-template-rows: 8rem;
  justify-items: center;
  align-items: center;
  @media (max-width: 680px) {
    grid-template-rows: 10rem;
  }
`;




class Footer extends React.Component {
  render() {
    return (
      <FooterBottom>
        <div style={{ display: 'grid', alignItems: 'center' }} className="nav__footer">
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
          <p style={{ color: 'white', fontSize: '.65em', textAlign: 'center' }}>Copyright &copy; 2019 trice.design</p>
        </div>
      </FooterBottom>
    )
  }
}

export default Footer

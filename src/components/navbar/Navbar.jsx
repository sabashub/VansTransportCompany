import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h4>Vans Transport Company</h4>
        </div>
        <div className='line'></div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
      
          <p><a href="#cars">Cars</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#contactUs">Contact Us</a></p>
        </div>
      </div>
      
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p> 
          <p><a href="#cars">Cars</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#contactUs">Contact Us</a></p>
          </div>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
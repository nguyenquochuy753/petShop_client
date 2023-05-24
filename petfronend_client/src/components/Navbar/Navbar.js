import React, { useState } from 'react';
import LogoPetShop from "../../Image/logopetshop.png";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navbar'>
      <img src={LogoPetShop} alt='Logo' className='navbar_logo' />
      <div className='navbar_content'>
        <a
          href='#home'
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a
          href='#service'
          className={activeLink === 'service' ? 'active' : ''}
          onClick={() => handleLinkClick('service')}
        >
          Service
        </a>
        <a
          href='#product'
          className={activeLink === 'product' ? 'active' : ''}
          onClick={() => handleLinkClick('product')}
        >
          Product
        </a>
        <a
          href='#about'
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          About us
        </a>
      </div>
      <div className='navbar_signin'>Sign in</div>
    </div>
  );
}

export default Navbar;

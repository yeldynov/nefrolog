import { useRef } from 'react';
import { FaBars, FaTimes, FaPhoneSquareAlt } from 'react-icons/fa';

import './navigation.styles.scss';

const Navigation = () => {
  const navRef = useRef();

  const showNavbar = (e) => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
      <div className='nav-logo'>Нефролог</div>
      <div className='phone-icon'>
        <FaPhoneSquareAlt />
      </div>
      <nav ref={navRef}>
        <a href='#home' onClick={showNavbar}>
          Головна
        </a>
        <a href='#meet' onClick={showNavbar}>
          Знайомство
        </a>
        <a href='#services' onClick={showNavbar}>
          Послуги
        </a>
        <a href='#contact' onClick={showNavbar}>
          Записатися
        </a>
        <a href='#testimonials' onClick={showNavbar}>
          Відгуки
        </a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navigation;

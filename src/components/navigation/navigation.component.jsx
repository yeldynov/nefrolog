import { useState } from 'react';
import './navigation.styles.scss';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const animateLinks = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger = document.querySelector('.burger');

    navLinks.forEach((link, index) => {
      if (link.style.animation) link.style.animation = '';
      else
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
    });
    
    // burger animation
    burger.classList.toggle('toggle');
  };

  const showNavbar = () => {
    setIsActive(!isActive);
    animateLinks();
  };

  return (
    <nav>
      <ul className={`${isActive ? 'nav-active' : null} nav-links`}>
        <li>
          <a href='#home' onClick={showNavbar}>
            Головна
          </a>
        </li>
        <li>
          <a href='#meet' onClick={showNavbar}>
            Знайомство
          </a>
        </li>
        <li>
          <a href='#services' onClick={showNavbar}>
            Послуги
          </a>
        </li>
        <li>
          <a href='#contact' onClick={showNavbar}>
            Записатися
          </a>
        </li>
        <li>
          <a href='#testimonials' onClick={showNavbar}>
            Відгуки
          </a>
        </li>
      </ul>
      <div className='burger' onClick={showNavbar}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
};

export default Navigation;

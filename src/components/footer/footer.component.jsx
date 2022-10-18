import './footer.styles.scss';

const Footer = () => {
  return (
    <section id='footer'>
      <div className='footer-nav'>
        <ul>
          <li>
            <a href='#home'>Головна</a>
          </li>
          <li>
            <a href='#meet'>Знайомство</a>
          </li>
          <li>
            <a href='#services'>Послуги</a>
          </li>
          <li>
            <a href='#contact'>Записатися на консультацію</a>
          </li>
          <li>
            <a href='#testimonials'>Відгуки</a>
          </li>
        </ul>
      </div>
      <div className='bottom-line'></div>
      <div className='bottom-content'>
        <div className='copy'>© Banderol design 2022</div>
        <div className='social'>
          <i className='bi bi-instagram'></i>
          <i className='bi bi-telegram'></i>
          <i className='bi bi-youtube'></i>
          <i className='bi bi-twitter'></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;

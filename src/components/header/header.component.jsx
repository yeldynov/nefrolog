import './header.styles.scss';

const Header = () => {
  return (
    <section className='header-section'>
      <div id='header'>
        <div className='header-container'>
          <nav>
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
                <a href='#contact'>Записатися</a>
              </li>
              <li>
                <a href='#testimonials'>Відгуки</a>
              </li>
            </ul>
          </nav>
          <div className='header-text'>
            <h1>Лікування хвороб нирок</h1>
            <p>
              Єлдинов Сергій Сергійович, <br /> лікар-нефролог
            </p>
            <a href='#contact'>Записатися</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

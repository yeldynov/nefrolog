import headerPhoto from '../../assets/header-photo.png';
import Navigation from '../navigation/navigation.component';
import './header.styles.scss';

const Header = () => {
  return (
    <section id='header'>
      <Navigation />
      <div className='content'>
        <div className='textBox'>
          <h2>Лікування хвороб нирок</h2>
          <p>
            Єлдинов Сергій Сергійович <br /> лікар-нефролог
          </p>
          <a href='#contact'>Записатися</a>
        </div>
        <div className='imgBox'>
          <img src={`${headerPhoto}`} alt='header' />
        </div>
      </div>
    </section>
  );
};

export default Header;

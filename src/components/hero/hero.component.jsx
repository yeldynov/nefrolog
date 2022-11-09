import heroImage from '../../assets/header-photo.png';
import './hero.styles.scss';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>Лікування хвороб нирок</h1>
        <p>
          Єлдинов Сергій Сергійович, <br /> лікар-нефролог
        </p>
        <a href='#contact'>Записатися</a>
      </div>
    </div>
  );
};

export default Hero;

import Hero from '../hero/hero.component';
import Navigation from '../navigation/navigation.component';
import './header.styles.scss';

const Header = () => {
  return (
    <section id='header'>
      <Navigation />
      <Hero />
    </section>
  );
};

export default Header;

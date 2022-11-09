import { Fragment } from 'react';
import Contact from '../../components/contact/contact.component';
import Header from '../../components/header/header.component';
import Meet from '../../components/meet/meet.component';
import Services from '../../components/services/services.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Meet />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;

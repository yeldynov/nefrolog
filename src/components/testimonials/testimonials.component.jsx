import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import TestimonialItem from './testimonial-item.component';
import test1 from '../../assets/testimonials/testimonial1.png';
import './testimonials.styles.scss';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h1>Ваші відгуки</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        // spaceBetween={100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
        }}
        breakpoints={{
          320: {
            width: 320,
            loop: false,
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem image={test1} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;

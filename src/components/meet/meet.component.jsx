import meetPhoto from '../../assets/meet-photo.png';
import './meet.styles.scss';

const Meet = () => {
  return (
    <section id='meet' className='about'>
      <div className='main'>
        <img src={`${meetPhoto}`} alt='' />
        <div className='about-text'>
          <h1>Познайомимось?</h1>
          <p>
            Вітаю! Мене звати Сергій Сергійович, я лікар-нефролог. <br />
            <br />
            Закінчив Харківський медичний університет, направлення лікувальна
            справа. <br />
            <br />
            Далі інтернатура на кафедрі терапії, нефрології та сімейної медицини
            та робота на базі лікарні швидкої та невідкладної допомоги. <br />
            <br />
            Спочатку як лікар-інтерн, а далі як практикуючий лікар я праціював
            більше 5 років у невідкладній медицині та здобував важливий досвід.
            <br />
            <br /> Далі отримав спеціалізацію лікар-нефролог та зіткнувся
            безпосередньо з «нирковими» пацієнтами в умовах діалізного центру
            «Слобожанський центр нефрології».
            <br /> <br /> Праціючи в гемодіалізі я значно глибше познайомився з
            різноманітними хворобами нирок, методами їхньої діагностики та
            лікування.
            <br /> <br />
            Маючи такий цікавий досвід та бажання допомагати людям я вирішив
            відкрити консультативний прийом.
            <br />
            <br />
            Враховуючи, що зараз багато пацієнтів не мають змоги беспосередньо
            прийти до лікаря, але практично в кожного є можливість вийти до
            мережі Інтернет та поспілкуватися, я вирішив відкрити прийом онлайн.
            Це відносто швидко, зручно та ефективно.
          </p>
          <div className='meet-bottom-line'></div>
        </div>
      </div>
      <div className='bottom-gradient-thick' />
    </section>
  );
};

export default Meet;

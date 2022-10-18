import './contact.styles.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <h1>Записатися на консультацію </h1>
      <div className='container'>
        <div className='contact-box'>
          <div className='left'>
            <h2>Заповніть форму</h2>
            <input
              type='text'
              className='field'
              placeholder="Введіть ваше ім'я "
            />
            <textarea
              className='field area'
              cols='5'
              rows='5'
              placeholder='Напишіть Ваше повідомлення'
            ></textarea>
            <input
              type='text'
              className='field'
              placeholder='Ваш номер телефону'
            />
            <button className='btn'>Записатися</button>
          </div>
          <div className='right'>
            <p>
              Ми отримуємо форму, телефонуємо Вам та обираємо зручний час для
              онлайн-дзвінка
            </p>
            <p>
              Ми з Вами спілкуємося онлайн, згадуємо анамнез, скарги, та
              вирішуємо щодо доцільності обстеження
            </p>
            <p>
              Далі після дообстеження розпочинаємо лікування. Тримаємо зв’язок
              до Вашого повного одужання.
            </p>
            <p>
              Після одужання Ви можете звернутися та отримати додаткову
              консультацію.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

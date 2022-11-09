import { useState } from 'react';
import './contact.styles.scss';

const defaultFormFields = {
  name: '',
  message: '',
  phone: '',
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, message, phone } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    resetFormFields();
    alert('Дякуємо, вам скоро зателефонують...'); // TODO: Add toast or modal, or redirect, or whatever...
    console.log('submitted');
  };

  return (
    <section id='contact'>
      <h1>Записатися на консультацію </h1>
      <div className='container'>
        <div className='contact-box'>
          <div className='left'>
            <div className='space-control'>
              <h2>Заповніть форму</h2>
              <div className='circle'>1</div>
            </div>
            <form onSubmit={submitForm}>
              <input
                type='text'
                className='field'
                placeholder="Введіть ваше ім'я "
                required
                onChange={handleChange}
                name='name'
                value={name}
              />
              <textarea
                className='field area'
                cols='5'
                rows='5'
                placeholder='Напишіть Ваше повідомлення'
                required
                onChange={handleChange}
                name='message'
                value={message}
              ></textarea>
              <input
                type='text'
                className='field'
                placeholder='Ваш номер телефону'
                required
                onChange={handleChange}
                name='phone'
                value={phone}
              />
              <button className='btn'>Записатися</button>
            </form>
          </div>
          <div className='right'>
            <h3 className='how-it-goes'>Як проходить консультація?</h3>
            <div className='space-control'>
              <div className='circle'>2</div>
              <p>
                Ми отримуємо форму, телефонуємо Вам та обираємо зручний час для
                онлайн-дзвінка
              </p>
            </div>
            <div className='space-control'>
              <div className='circle'>3</div>
              <p>
                Ми з Вами спілкуємося онлайн, згадуємо анамнез, скарги, та
                вирішуємо щодо доцільності обстеження
              </p>
            </div>
            <div className='space-control cursed'>
              <div className='circle'>4</div>
              <p>
                Далі після дообстеження розпочинаємо лікування. Тримаємо зв’язок
                до Вашого повного одужання.
              </p>
            </div>
            <div className='space-control cursed'>
              <div className='circle'>5</div>
              <p>
                Після одужання Ви можете звернутися та отримати додаткову
                консультацію.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

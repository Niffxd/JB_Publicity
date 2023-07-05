import { useEffect, useState } from 'react';
import style from './Budget.module.css';

export default function Budget () {
  const [sending, setSending] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [form, setForm] = useState({
    Nombre: '',
    Telefono: '',
    Email: '',
    Mensaje: ''
  });

  const handlerCheckName = event => {
    setForm({
      ...form,
      Nombre: event.target.value
    });

    if (!event.target.value.length) document.getElementById('name').classList.add(style.show_warning);
    else document.getElementById('name').classList?.remove(style.show_warning);
  };

  const handlerCheckPhone = event => {
    setForm({
      ...form,
      Telefono: event.target.value
    });
  };

  const handlerCheckEmail = event => {
    setForm({
      ...form,
      Email: event.target.value
    });

    if (!event.target.value.length) document.getElementById('email').classList.add(style.show_warning);
    else document.getElementById('email').classList?.remove(style.show_warning);
    if (!event.target.value.includes('@')) document.getElementById('emailCheck').classList.add(style.show_warning);
    else document.getElementById('emailCheck').classList?.remove(style.show_warning);
    if (!event.target.value.includes('.co')) document.getElementById('emailCheck').classList.add(style.show_warning);
  };

  const handlerCheckMessage = event => {
    setForm({
      ...form,
      Mensaje: event.target.value
    });

    if (!event.target.value.length) document.getElementById('message').classList.add(style.show_warning);
    else document.getElementById('message').classList?.remove(style.show_warning);
  };

  const handlerEmailSend = event => {
    event.preventDefault();
    if (!form.Nombre.length || !form.Email.length || !form.Mensaje.length) {
      document.getElementById('send_message').classList.add(style.show_warning);
    } else {
      setSending(true);
      fetch('https://formsubmit.co/ajax/jb@jbciapublicitaria.com.ar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(() => {
          setForm({
            Nombre: '',
            Telefono: '',
            Email: '',
            Mensaje: ''
          });
        })
        .catch(error => console.log(error));
      setTimeout(() => setSending(false), 3000);
      setTimeout(() => closeModal(), 3000);
    }
  };

  const handlerPCEmail = event => {
    event.preventDefault();
    window.location.href = 'mailto:iphonewavetuc@gmail.com';
  };

  const closeModal = () => {
    document.getElementById('modal').classList.remove(style.budget__container);
  };

  const checkStatus = () => {
    if (form.Nombre.length > 0 && form.Email.length > 0 && form.Mensaje.length > 0) setDisable(false);
    else setDisable(true);
  };

  useEffect(() => {
    checkStatus();
  }, [form]);

  return (
    <dialog id='modal'>
      <form className={style.budget_form__container}>
        <div className={style.title}>
          <h2>Obtener presupuesto</h2>
          <span className='material-symbols-outlined' onClick={closeModal}>
            cancel
          </span>
        </div>
        <div className={style.form__content}>
          <input type='text' name='name' placeholder='Nombre*' value={form.Nombre} onChange={handlerCheckName}/>
          <p id='name' className={style.warning}>* Este campo no puede estar vacío *</p>
          <input type='tel' name='phone' placeholder='Telefono' value={form.Telefono} onChange={handlerCheckPhone}/>
          <input type='email' name='email' placeholder='Correo electrónico*' value={form.Email} onChange={handlerCheckEmail}/>
          <p id='email' className={style.warning}>* Este campo no puede estar vacío *</p>
          <p id='emailCheck' className={style.warning}>* Ingrese un correo electrónico válido *</p>
          <input type='text' id={style.message} name='message' placeholder='¿En qué podemos ayudarte?*' value={form.message} onChange={handlerCheckMessage}/>
          <p id='message' className={style.warning}>* Este campo no puede estar vacío *</p>
          <button className={disabled ? style.button__disabled : style.button__enabled} disabled={disabled} onClick={handlerEmailSend}>{ sending ? '¡Gracias! 😄' : 'Enviar'}</button>
        </div>
      <p>O tal vez prefieras 👇</p>
      <button className={style.button__enabled} onClick={handlerPCEmail}>Enviar mail desde tu aplicación de correo</button>
      </form>
    </dialog>
  );
}

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from '../form/Form.module.css';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !nombre ||
      !apellido ||
      !email ||
      nombre.length < 5 ||
      !validateEmail(email)
    ) {
      setError('Por favor verifique su información nuevamente');
      return;
    } else {
      props.onForm(nombre, apellido, email);
      setError('');
      setFormularioEnviado(true);
      console.log('Formulario enviado');
    }
  }

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  function handleApellido(e) {
    setApellido(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className={styles.contact }>
      <>
        {formularioEnviado ? (
          <di>
            <h2>
              Gracias {nombre}, te contactaremos lo antes posible vía email.
            </h2> 
            <button className={styles.button} onClick={() => navigate("/")}>
              Volver
            </button>
          </di>
        ) : (
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2 className={styles.text}>¿Deseas realizar consultas?</h2>
            <label className={styles.label}  htmlFor="nombre">Nombre:</label>
            <input
              className={styles.input}
              type="text"
              id="nombre"
              placeholder='Nombre'
              value={nombre}
              onChange={handleNombre}
            />

            <label className={styles.label} htmlFor="apellido">Apellido:</label>
            <input
              className={styles.input}
              type="text"
              id="apellido"
              placeholder='Apellido'
              value={apellido}
              onChange={handleApellido}
            />

            <label className={styles.label} htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="text"
              id="email"
              placeholder='tumail@gmail.com'
              value={email}
              onChange={handleEmail}
            />

            {error && <p>{error}</p>}

            <button className={styles.button} type="submit">
              Contactar
            </button>
          </form>
        )}
      </>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, cleanMessage } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import styles from "./FormLogin.module.css";
import { useEffect } from 'react';



const FormLogin = () => {

  const message = useSelector(state=> state.messageOperation)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (message.length>0) {
      alert(message)
      dispatch(cleanMessage())
          
    }
  }, [message, dispatch]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));

    
  };

  return (
    <div className={styles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password" 
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className={styles.submit} type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FormLogin;


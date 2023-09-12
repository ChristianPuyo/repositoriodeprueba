
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarSecretaria.module.css';
import { signout } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const NavBarSecretaria = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  function buttonSingout(){
    dispatch(signout())
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to="/" className={styles.navbarLogo}><img src='https://w1.pngwing.com/pngs/569/1002/png-transparent-education-logo-organization-institute-higher-education-pucallpa-line-area-thumbnail.png' width="70" height="70"></img></Link>
      </div>
      <div className={styles.navbarCenter}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}><button  className={styles.navbarLinkSalir} onClick={(e)=>buttonSingout(e)}>Cerrar Sesión</button></Link>
                      
          </li>
          
          
          
          
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Notas
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/registrarnota">Registrar Nota</Link></li>
                <li><Link to="/consultarnotas">Administrar notas</Link></li>
                <li><Link to="/cargamasivanotas">Registrar Notas Masivamente</Link></li>
              </ul>
            )}
          </li>
         
          
          
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBarSecretaria;

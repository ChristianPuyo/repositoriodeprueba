
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { signout } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const NavBar = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  function buttonSingout(){
    dispatch(signout())
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  

  return (
    <div>
      
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
              Gestionar Alumnos
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/createstudent">Registrar Alumno</Link></li>
                <li><Link to="/gestionarestudiantes">Gestionar Alumnos</Link></li>
                <li><Link to="/generarcertificado">Gernerar Certificado de Estudios</Link></li>
                <li><Link to="/cargararchivo">Registrar alumnos masivamente</Link></li>
              </ul>
            )}
          </li>
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Cursos
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/createcurso">Registrar Curso</Link></li>
                <li><Link to="/gestioncursos">Administrar Cursos</Link></li>
                <li><Link to="/cargarcursos">Registrar Cursos Masivamente</Link></li>
                
              </ul>
            )}
          </li>
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Planes de Estudio
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/createplandeestudio">Registrar Plan de Estudio</Link></li>
                
              </ul>
            )}
          </li>
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Periodos Lectivos
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/createperiodolectivo">Registrar Periodo Lectivo</Link></li>
                
              </ul>
            )}
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
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Matricula
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/matricula">Generar matrícula</Link></li>
                
              </ul>
            )}
          </li>
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Gestionar Profesor
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                <li><Link to="/createteacher">Registrar Docente</Link></li>
               
              </ul>
            )}
          </li>
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <button onClick={toggleDropdown} className={styles.navbarLink}>
              Otras Opciones
            </button>
            {showDropdown && (
              <ul className={styles.submenu}>
                
                <li><Link to="/createuser">Crear nuevo usuario</Link></li>
              </ul>
            )}
          </li>
          
        </ul>
      </div>
    </nav>


    
    </div>
    
  );
};

export default NavBar;

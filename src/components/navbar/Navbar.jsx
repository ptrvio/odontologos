import React, { useContext } from 'react'
import styles from './../navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'


const Navbar = () => {
  const { theme, toggleTheme, imgTheme } = useContext(ThemeContext)

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  }

  return (
    <nav style={stylesTheme} className={styles.navbar}>
        <Link className={`${styles.logo} ${styles.links}`} style={stylesTheme} to='./'>
          <p>Clinica Dental</p>
        </Link>
      <Link className={styles.links} style={stylesTheme} to='./'>
        Inicio
      </Link>
      <Link className={styles.links} style={stylesTheme} to='./favs'>
        Favoritos
      </Link>
      <Link className={styles.links} style={stylesTheme} to='./contacto'>
        Contacto
      </Link>
      <div className={styles.contButton}>
        <button className={styles.button} onClick={toggleTheme}>
          <img src={imgTheme} alt='Theme icon' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

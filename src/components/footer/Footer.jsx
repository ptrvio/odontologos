import React, { useContext } from 'react'
import styles from './../footer/Footer.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import image from '../../assets/DH.png'

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };


  return (
    <footer className={styles.footer} style={stylesTheme}>
      <div>
        <img className={styles.image} src={image} alt="DH" />
        <div classeName={styles.icons}>
            <a href="https://www.facebook.com"><img className={styles.icon} src="src/assets/ico-facebook.png" alt="" /></a>
            <a href="https://www.instagram.com"><img className={styles.icon} src="src/assets/ico-instagram.png" alt="" /></a>
            <a href="https://www.whatsapp.com"><img className={styles.icon} src="src/assets/ico-whatsapp.png" alt="" /></a>
            <a href="https://www.tiktok.com"><img className={styles.icon} src="src/assets/ico-tiktok.png" alt="" /></a>
        </div>
      </div>
      <h6 className={styles.name}>Grupo: Alcade - Triviño</h6>
    </footer>
  )
}

export default Footer
import React from 'react';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <nav className={styles.login}>
       <button  className={styles.loginButton}>Sign In</button>
    </nav>
  );
}

export default Header;

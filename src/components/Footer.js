import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
   return (
      <p className={styles.credits}>
         Icons made by
         <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
         from
         <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
         is licensed by
         <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
   </p>
   );
}

export default Footer;

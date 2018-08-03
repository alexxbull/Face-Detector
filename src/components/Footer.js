import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
   return (
     <footer>
        <p className={styles.credits}>
           Logo made by
           <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
           from
           <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
           is licensed by
           <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
     </p>
   </footer>
   );
}

export default Footer;

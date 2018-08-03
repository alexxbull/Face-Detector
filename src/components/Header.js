import React from 'react';
import styles from '../styles/Header.module.css'

const Header = ({ isSignedIn, changeRoute }) =>
{
   const signOut = () => changeRoute('signin')

     return (
       <nav className={styles.login}>
         {
            isSignedIn
            ? <button className={styles.loginButton} onClick={signOut}>Sign out</button>
            : <div>
                  <button className={styles.loginButton} onClick={() => changeRoute('signin')}>Sign in</button>
                  <button className={styles.loginButton} onClick={() => changeRoute('register')}>Register</button>
              </div>
         }
       </nav>
     );
}

export default Header;

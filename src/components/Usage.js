import React from 'react';
import styles from '../styles/Usage.module.css'

const Rank = ( {name, attempts}) => {
   return (
      <div>
         <span className={styles.message}>{`${name}, you have`}</span>
         <span className={styles.attempts}>{`${attempts}`}</span>
         <span className={styles.message}>{`out of`}</span>
         <span className={styles.attempts}>{`100`}</span>
         <span className={styles.message}>{`tries left.`}</span>
      </div>
   );
}

export default Rank;

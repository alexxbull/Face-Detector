import React from 'react';
import styles from '../styles/ImageLinkForm.module.css'
const ImageLinkForm = ({ onInputchange, onButtonSubmit }) => {
    return (
        <div>
           <p className={styles.instructions}>
             Insert an image link to detect faces in the photo. Give it a try.
           </p>
           <div className='center'>
             <div className={`${styles.form} center`}>
                <input className={`${styles.inputField} center`} type='text' onChange={onInputchange}/>
                <button className={styles.detect}
                        onClick={onButtonSubmit}
                >Detect</button>
            </div>
           </div>
        </div>
    );
}

export default ImageLinkForm;

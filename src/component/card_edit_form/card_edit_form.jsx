import React from 'react';
import styles from './card_edit_form.module.css'
import Button from '../button/button'
import ImageFileInput from '../img_file_input/img_file_input'

const Card_edit_form = ({ card }) => {
    const { name, job, theme, github, message, fileName, fileURL }
    = card;
    const onSubmit =()=>{}
    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="job" value={job} />
            <select className={styles.select} name="theme" value={theme}>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="github" value={github} />
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
                <Button name="Delete" onClick={onSubmit}/>
        </form>
    )
};

export default Card_edit_form;
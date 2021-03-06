import React from 'react';
import styles from './card_edit_form.module.css'
import Button from '../button/button'

const Card_edit_form = ({ card, updateCard, deleteCard, FileInput }) => {

    const { name, job, theme, github, message, fileName }
        = card;

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card, [event.currentTarget.name]: event.currentTarget.value,
        })
    }
    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onSubmit = () => {
        deleteCard(card);
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} onChange={onChange} />
            <input className={styles.input} type="text" name="job" value={job} onChange={onChange} />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name="github" value={github} onChange={onChange} />
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    )
};

export default Card_edit_form;
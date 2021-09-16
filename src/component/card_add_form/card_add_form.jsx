import { React, memo, useRef, useState } from 'react';
import styles from './card_add_form.module.css'
import Button from '../button/button'


const CardAddform = memo(({ onAdd, FileInput }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const jobRef = useRef();
    const themeRef = useRef();
    const githubRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null });

    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onSubmit = (event) => {

        event.preventDefault();

        const card = {
            id: Date.now(), // uuid
            name: nameRef.current.value || '',
            job: jobRef.current.value || '',
            theme: themeRef.current.value || 'light',
            github: githubRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(card);
    }
    return (

        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
            <input ref={jobRef} className={styles.input} type="text" name="job" placeholder="Job" />
            <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={githubRef} className={styles.input} type="text" name="github" placeholder="Github" />
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"></textarea>
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    )
});

export default CardAddform;
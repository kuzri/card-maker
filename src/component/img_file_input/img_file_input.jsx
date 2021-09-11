import React, { useRef, useState } from 'react';
import styles from './img_file_input.module.css'

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const [loading, setloading] = useState(false);

    const inputRef = useRef();
    const onButtonClick = (event) => {
        inputRef.current.click();
        event.preventDefault();
    };

    const onChange = async event => {
        setloading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setloading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })

    }

    return <div className={styles.container}>
        <input
            className={styles.input}
            ref={inputRef}
            type="file"
            accept="image/*"
            name="file"
            onChange={onChange}
        />

        {(!loading &&
            <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>{name || 'no file'}</button>)}
        {loading && <div className={styles.loading}></div>}
    </div>
};

export default ImageFileInput;
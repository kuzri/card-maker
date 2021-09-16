import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMG = '/images/default_img.png';
const Card = memo(({ card }) => {
    const { name, job, theme, github, message, fileURL }
        = card;
    const url = fileURL || DEFAULT_IMG;
    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="users_photo" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.job}>{job}</p>
                <p className={styles.github}>{github}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
});



function getStyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme:${theme}`);
    }
}

export default Card;
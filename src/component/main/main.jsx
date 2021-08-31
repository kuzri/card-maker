import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './main.module.css';


function Main({ authService }) {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Lee',
            job: 'developer',
            theme: 'light',
            github: '@@@@',
            message: 'have a good coding',
            fileName: 'lee_information',
            fileURL: null
        },
        {
            id: '2',
            name: 'Kim',
            job: 'developer',
            theme: 'dark',
            github: '@@@@@@',
            message: 'have a good coding',
            fileName: 'Kim_information',
            fileURL: null
        },
        {
            id: '3',
            name: 'Park',
            job: 'developer',
            theme: 'colorful',
            github: '@@@@@',
            message: 'have a good coding',
            fileName: 'Park_information',
            fileURL: null
        },
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        })
    })

    return (
        <section className={styles.main}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};


export default Main;
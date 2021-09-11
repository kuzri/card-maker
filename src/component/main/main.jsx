import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './main.module.css';


function Main({ authService, FileInput }) {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'Lee',
            job: 'developer',
            theme: 'light',
            github: '@@@@',
            message: 'have a good coding',
            fileName: 'lee_information',
            fileURL: null
        },
        '2': {
            id: '2',
            name: 'Kim',
            job: 'developer',
            theme: 'dark',
            github: '@@@@@@',
            message: 'have a good coding',
            fileName: 'Kim_information',
            fileURL: null
        },
        '3': {
            id: '3',
            name: 'Park',
            job: 'developer',
            theme: 'colorful',
            github: '@@@@@',
            message: 'have a good coding',
            fileName: 'Park_information',
            fileURL: null
        },
    });
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


    const createOrupdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.main}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrupdateCard} updateCard={createOrupdateCard} deleteCard={deleteCard} FileInput={FileInput} />
                < Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};


export default Main;
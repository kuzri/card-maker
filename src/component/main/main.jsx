import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import { styles } from './main.module.css';


function Main({ authService }) {
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
            <Header />
            <Footer />
        </section>
    )
};


export default Main;
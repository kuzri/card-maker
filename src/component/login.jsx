import React from 'react';
import Header from './header';
import Footer from './footer';

const Login = ({ authService }) => {

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
            .then(console.log)
    };

    return (
        <>
            <Header />
            <h1>Login</h1>
            <ul>
                <li><button onClick={onLogin}>Google</button></li>
                <li><button onClick={onLogin}>Github</button></li>
            </ul>
            <Footer />
        </>
    )
};

export default Login;
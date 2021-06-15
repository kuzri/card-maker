import React from 'react';

const Login = (props) => {
    return (
        <>
            <div>
                <img src="/images/logo.png" alt="img" />
                <h2>Business Card Maker</h2>
            </div>
            <div>
                <h1>Login</h1>
                <button className={"google"}>Google</button>
                <button className={"github"}>Github</button>
            </div>
            <footer>
                <h3>copyrights ~~</h3>
            </footer>
        </>
    )
};

export default Login;
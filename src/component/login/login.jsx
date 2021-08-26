import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import { useHistory } from 'react-router';



const Login = ({ authService }) => {

  const history = useHistory();
  const goToMain = (uid) => {
    // history.push('/main');
    history.push({
      pathname: 'main',
      state: { id: uid },

    })
  }
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMain(data.user.uid))
      .catch(console.log);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid)
    })

  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin} >
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Twitter
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;

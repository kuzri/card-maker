import React from 'react';
import styles from './app.module.css';
import Login from './component/login/login'
import Main from './component/main/main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App({ authService, FileInput, cardRepository }) {
  return (
    <Router>
      <Switch>
        <>
          <div className={styles.app}>
            <Route path="/" exact >
              <Login authService={authService} />
            </Route>
            <Route path="/main">
              <Main authService={authService} cardRepository={cardRepository} FileInput={FileInput} />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );

}

export default App;

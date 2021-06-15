import React from 'react';
import Login from './component/login';

function App({ authService }) {
  return (
    <Login authService={authService} />
  )
}

export default App;
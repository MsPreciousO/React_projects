import React from 'react';
import LoginScreen from './screens/LoginScreen';


function App() {

  const styles ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2'
}
  return (
    <div style = {styles} className="App">
      Log In
      <LoginScreen />

    </div>
  );
}

export default App;

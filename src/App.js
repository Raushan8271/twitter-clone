import { useState } from 'react';
import './App.css';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Router from './router/Router';

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App" >
      {
        login ? <Router /> : <Register />
      }
    </div>
  );
}

export default App;

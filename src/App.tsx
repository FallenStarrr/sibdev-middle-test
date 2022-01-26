import React from 'react';
import './App.css';
import Form from './Form';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login';
import useToken from './hooks/useToken';
function App() {

  function Token(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
  }


  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <Router>
         <Route  path="/form" >
                <Form/>
         </Route>
         <Route path="/home">

         </Route>
       
    </Router>

  );
}

export default App;

import axios from 'axios';
import React from 'react';

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
async  function login () {
    let token =await axios.post('http://193.124.206.217:3000', {
      username,
      password
    })
    setToken(token)
    
  }
  return <div>
    <form onSubmit={login}>
            <input type="text" onChange={e => setUserName(e.target.value)} name="text"/>
            <input type="password"  onChange={e => setUserPassword(e.target.value)} name="password"/>
            <button type='submit'>Login</button>
    </form>
  </div>;
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;

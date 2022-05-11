//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
  
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type='text' name="name" placeholder="Username"/>
        <br/>
        <br/>
        <input type='password' name="password" placeholder="Password"/>
        <br/>
        <br/>
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};
  
export default Login;
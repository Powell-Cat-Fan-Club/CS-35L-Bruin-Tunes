//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
  
const SignUp = () => {
  return ( 
    <div>
      <h1>Register</h1>
      <form action = "/login">
        <input type='text' name="name" placeholder="Username"/>
        <br/>
        <br/>
        <input type='password' name="password" placeholder="Password"/>
        <br/>
        <br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
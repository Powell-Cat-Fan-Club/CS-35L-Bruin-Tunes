//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';  
import {findUser} from './userinfo_TEMP';
  
export default function Login() {
  function logOnClick(){
    var eleERROR = document.getElementById('errorTXT'); 
  
    var User = document.getElementById('nameL').value;
    if (!User) {
      eleERROR.innerHTML = 'Enter a Username';
      return;
    }
  
    var Pass = document.getElementById('passwordL').value;
    if (!Pass) {
      eleERROR.innerHTML = 'Enter a Password';
      return;
    }
  
    var searchUser = findUser(User);
    if (!searchUser || searchUser.password !== Pass) {
      eleERROR.innerHTML = 'Invalid Username or Password';
      return;
    }

    window.location.href = "/";
  }
  
  function regOnClick(){
    window.location.href = "/register"
  }

  return (
    <div>
      <h1>Login</h1>
      <h3 id="errorTXT"></h3>
      <input type='text' id="nameL" placeholder="Username"/>
      <br/>
      <br/>
      <input type='password' id="passwordL" placeholder="Password"/>
      <br/>
      <br/>
      <button onClick={logOnClick}>Login</button>
      <br/>
      <br/>
      <button onClick={regOnClick}>Register</button>

      <script>
        
      </script>
    </div>
  );
};

const hmtl4Login = `
  <script type="text/JavaScript">
    function logOnClick() {  
      var eleERROR = document.getElementById('errorTXT'); 

      var User = document.getElementById('nameL').value;
      if (!User) {
        eleERROR.innerHTML = 'Enter a Username';
        return;
      }
    
      var Pass = document.getElementById('passwordL').value;
      if (!Pass) {
        eleERROR.innerHTML = 'Enter a Password';
        return;
      }

      var searchUser = findUser(newUser);
      if (!searchUser || searchUser.password !== Pass) {
        eleERROR.innerHTML = 'Invalid Username or Password';
        return;
      }
        
      //redirect to home
    }       
  </script>
`



//You have entered an invalid Username or Password.

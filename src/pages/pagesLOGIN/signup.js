//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import {findUser, addUser} from './userinfo_TEMP';

export default function SignUp() {
  function btnOnClick() {  
    var eleERROR = document.getElementById('errorTXT'); 
    
    var newUser = document.getElementById('nameR').value;
    if (!newUser) {
      eleERROR.innerHTML = 'Username required';
      return;
    }
    
    var newPass = document.getElementById('passwordR').value;
    if (!newPass) {
      eleERROR.innerHTML = 'Password required';
      return;
    }

    //here is the problem
    var oldUser = findUser(newUser);
    if (oldUser) {
      eleERROR.innerHTML = 'Invalid Username';
      return;
    }

    addUser(newUser,newPass);
    console.log("has gone here");
    window.location.href = "/login";
  }
  
  return (  
    <div>
      <h1>Register</h1>
      <h3 id="errorTXT"></h3>
      <input type='text' id="nameR" placeholder="Username"/>
      <br/>
      <br/>
      <input type='password' id="passwordR" placeholder="Password"/>
      <br/>
      <br/>
      <button onClick={btnOnClick}>Register</button>
      
    </div>
  );
};





/*
      <script type="text/JavaScript">
               
      </script>
*/






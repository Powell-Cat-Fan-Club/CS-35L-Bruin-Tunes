//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React, {useEffect, useState} from 'react';  
import {findUser} from './finduser.js';
  
export default function Login() {
  const [users, setUsers] = useState();
  
    useEffect(() => {
      async function getUsers() {
        const response = await fetch(`http://localhost:5000/login/`);
  
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const users = await response.json();
        setUsers(users);
    }
    getUsers();
    });
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
  
    var searchUser = findUser(User, Pass, users);
    if (typeof(searchUser)=="undefined" ) {
      eleERROR.innerHTML = 'Invalid Username or Password';
      return;
    }
    else {
      async function updateLogin()
      {
        await fetch(`http://localhost:5000/loggedin/${searchUser._id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({isloggedin: true})
        })
        .catch (error => {
          window.alert(error);
          return;
        });
      }

      updateLogin(); 
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
//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React, {useEffect, useState} from 'react';  
import { DivContainer } from '../../style.js';
import {findUser} from './finduser.js';
import { 
  ErrorBox,
  Header,
  InputBox,
  MainContainer,
  NavLink,
  SideContainer,
  SubmitButton
} from './loginStyle.js';

export default function Login() {
  const [showError, setshowError] = useState(false);
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
    var eleERROR = document.getElementById('loginError'); 
  
    var User = document.getElementById('loginName').value;
    if (User.length <= 0) {
      eleERROR.innerHTML = 'Enter a Username';
      setshowError(true);
      return;
    }
  
    var Pass = document.getElementById('loginPassword').value;
    if (Pass.length <= 0) {
      eleERROR.innerHTML = 'Enter a Password';
      setshowError(true);
      return;
    }
  
    var searchUser = findUser(User, Pass, users);
    if (typeof(searchUser)=="undefined" ) {
      eleERROR.innerHTML = 'Invalid Username or Password';
      setshowError(true);
      return;
    }
    else {
      setshowError(false);
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
  
  return (
    <DivContainer>
      <MainContainer width="70%">
        <Header> Login </Header>
        <ErrorBox id="loginError" show={showError}></ErrorBox>
        <InputBox type="text" id="loginName" placeholder="Username" />
        <InputBox type='password' id="loginPassword" placeholder="Password"/>
        <SubmitButton onClick={logOnClick}> Login </SubmitButton>
      </MainContainer>

      <SideContainer width="30%">
        <Header> New Here? </Header>
        <NavLink to="/register"> Sign Up for BruinTunes </NavLink>
      </SideContainer>
      
    </DivContainer>
  );
};
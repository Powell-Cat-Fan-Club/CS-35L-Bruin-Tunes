//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React, {useEffect, useState} from 'react';
import { DivContainer } from '../../style.js';
import {findUsername} from './finduser.js';
import { 
  AccountForm,
  ErrorBox,
  Header,
  InputBox,
  MainContainer,
  NavLink,
  SideContainer,
  SubmitButton
} from './loginStyle.js';

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isloggedin: false,
    likes: [],
    comments: [],
  });

  function updateForm(value) {
    return setForm((prev) => {
      return {...prev, ...value};
    });
  }

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

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = {...form};
    const errorHTML = document.getElementById("signError");
    setshowError(true);

    //check for missing info 
    if (newUser.username.length === 0) {
      errorHTML.innerHTML="Please enter in a valid username.";
      return;
    }
    else if (newUser.password.length === 0) {
      errorHTML.innerHTML="Please enter in a valid password.";
      return;
    }

    //check the verify
    const verify = document.getElementById('signVerify').value;
    if (verify.length === 0) {
      errorHTML.innerHTML="Please confirm your password.";
      return;
    }
    else if (newUser.password !== verify) {
      errorHTML.innerHTML="Passwords entered do not match.";
      return;
    }

    //check for duplicates
    var usernameUsed = findUsername(newUser.username, users);
    if(usernameUsed !== undefined) {
      errorHTML.innerHTML="Sorry, that username has been taken.";
      return;
    }
     
    else{
      //add user
      await fetch("http://localhost:5000/login/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(newUser),
      })
      .catch (error => {
        window.alert(error);
        return;
      });

      //reset page
      setshowError(false);
      document.getElementById('signVerify').value="";
      setForm({username:"", password:"", isloggedin: false, likes: [], comments: []});
      
      //redirect to login page
      window.location.href = "/login";
      window.alert("Account created.");
    }
  }

  return(
    <DivContainer>
      <SideContainer width="30%">
        <Header> Have an Account? </Header>
        <NavLink to="/login"> Log in </NavLink>
      </SideContainer>

      <MainContainer width="70%">
        <Header> Sign Up </Header>
        <ErrorBox id="signError" show={showError}></ErrorBox>
        <AccountForm onSubmit={onSubmit}>
          <InputBox 
            id="signName"
            type="text" 
            placeholder="Username" 
            value={form.username}
            onChange={(e) => updateForm({ username: e.target.value, isloggedin: false, comments:[], likes:[] })}
          />
          <InputBox 
            id="signPassword"
            type='password'  
            placeholder="Password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
          <InputBox 
            id="signVerify"
            type='password'  
            placeholder="Confirm Password"
          />

          <SubmitButton type="submit"> Create account </SubmitButton>
        </AccountForm>
      </MainContainer>
    </DivContainer>
 );
}
//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React, {useState} from 'react';

import { useNavigate } from "react-router";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    likes: [],
    comments: [],
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return {...prev, ...value};
    });
  }


async function onSubmit(e) {
  e.preventDefault();
  const newUser = {...form};
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

  setForm({username:"", password:"", likes: [], comments: []});
  navigate("/");
}
  return(
  <div>
     <h3>Sign up!</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="username">Username</label>
         <input
           type="text"
           className="form-control"
           id="username"
           value={form.username}
           onChange={(e) => updateForm({ username: e.target.value, comments:[], likes:[] })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create account"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}



// export default function SignUp() {
//   function btnOnClick() {  
//     var eleERROR = document.getElementById('errorTXT'); 
    
//     var newUser = document.getElementById('nameR').value;
//     if (!newUser) {
//       eleERROR.innerHTML = 'Username required';
//       return;
//     }
    
//     var newPass = document.getElementById('passwordR').value;
//     if (!newPass) {
//       eleERROR.innerHTML = 'Password required';
//       return;
//     }

//     //here is the problem
//     var oldUser = findUser(newUser);
//     if (oldUser) {
//       eleERROR.innerHTML = 'Invalid Username';
//       return;
//     }

//     addUser(newUser,newPass);
//     console.log("has gone here");
//     window.location.href = "/login";
//   }
  
//   return (  
//     <div>
//       <h1>Register</h1>
//       <h3 id="errorTXT"></h3>
//       <input type='text' id="nameR" placeholder="Username"/>
//       <br/>
//       <br/>
//       <input type='password' id="passwordR" placeholder="Password"/>
//       <br/>
//       <br/>
//       <button onClick={btnOnClick}>Register</button>
      
//     </div>
//   );
// };





/*
      <script type="text/JavaScript">
               
      </script>
*/






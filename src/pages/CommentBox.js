// CommentBox.js
import React, {useEffect, useState} from 'react';  
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';



export default function CommentBox() {
  const [comments, setComments] = useState();

  useEffect(() => {
    async function GetComments() {
      const response = await fetch(`http://localhost:5000/comments/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const comments = await response.json();
      setComments(comments);
    }
    GetComments();
  }, [comments])

  const [user, setUser] = useState();

  useEffect(() => {
    async function GetUser() {
      const response = await fetch(`http://localhost:5000/loggedinuser/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      let users = await response.json();
      setUser(users);
    }
    GetUser();
  }, [user])

    //console.log(comments);  

    return(   user != undefined ?
      <div className="container">
        <div className="comments">
          <h2>{"Comments:"}</h2>
          <CommentList data={comments} />
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div> : 
      <div className="container">
      <div className="comments">
        <h2>{"Log in to comment!"}</h2>
        <CommentList data={comments} />
      </div>
      <div className="form">
        <CommentForm />
      </div>
    </div>
    )
  }


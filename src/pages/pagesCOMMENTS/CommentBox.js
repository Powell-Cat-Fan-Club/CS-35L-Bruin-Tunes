// CommentBox.js
import React, {useEffect, useState} from 'react';  
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';
import { Header } from '../../style';
import { ErrorBox } from '../pagesLOGIN/loginStyle'


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
  
  return (
    <div className="container">
      <div className="section1">
        <Header>{"Comments"}</Header>

        <div className="comments">
          <CommentList data={comments} />
        </div>
      </div>
        
      <div className='section2'>
        { user != undefined ? 
          <></>
        : 
          <ErrorBox show={true}> 
            Login in to Comment
          </ErrorBox>
        }
        <div className="form">
          <CommentForm />
        </div>
      </div>
    </div> 
  )
}

/*
        
*/
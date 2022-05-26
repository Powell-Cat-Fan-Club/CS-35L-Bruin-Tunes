// CommentBox.js
import React, {useEffect, useState} from 'react';  
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import DATA from './data';
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
  }
  )
    //console.log(comments);  

    return(   
      <div className="container">
        <div className="comments">
          <h2>Comments:</h2>
          <CommentList data={comments} />
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    )
  }


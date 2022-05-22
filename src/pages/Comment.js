//credit to: https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIxYTgyNTllYjA3NjYwZWYyMzc4MWM4NWI3ODQ5YmZhMGExYzgwNmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTI2OTE0NzQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjM1ODEwMDg5NDUwMzg1NTgyMCIsImVtYWlsIjoidHJhbmJyYW5kb24xMjMzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQnJhbmRvbiBUcmFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpJTWtQMDgtYWtUa21xbWx4WjRpbnZLa0lMNmhDX3dUQ2Z5b1BYPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkJyYW5kb24iLCJmYW1pbHlfbmFtZSI6IlRyYW4iLCJpYXQiOjE2NTI2OTE3NzQsImV4cCI6MTY1MjY5NTM3NCwianRpIjoiNDAzMDcwYmNkNDE1ODAzMzViOWIwOGZjN2NjMGVhNTY5NGIwNmE2NCJ9.vSP6W39nUpqtkfk2u80lcAV6Ot-E8p1zktP-PDKwUAAcYhNPMnNCJPFlvQh8CQURTPSbnoGHqBrdwymdE93dxarmWyjS0fOWxKzY_pWdzUYGiw3l6e1oGelAMrMgWGXArHSXP26QIwDKXTfiHPFDFIJ1jya7BHq_neFI5hS2ZU_ivvQ_nIdtIZcDzbIrGUG9o7dTpRdhvB4jVEyDTMs6vhTBLo-TZ-vcpp6kBEQdltikcR4QuAVVT4k75Qji-qJLKRpCOjX96CA02Ff2tfT9HywxCBNzUbr5xT214KlTaR8U9v8-kheffs2EHDJeAvvoB5UGGEU4M8c6K7LH_AioIg
// Comment.js

import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Comment = props => (
  <div className="singleComment">
    <img alt="user_image" className="userImage" src={`https://picsum.photos/70?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{props.author}</h3>
        <p>{props.children}</p>
        <ReactMarkdown source={props.children} />
      </div>
      <div className="singleCommentButtons">
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Comment;


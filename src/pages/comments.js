//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from 'react'; 
const Comments = () => {
  return (
    <div>
      <h1>Comments</h1>
      <form>
        Enter your username here: <br></br><input type="text" name="username"></input>
        <br></br><br></br>
        Enter your comment here: <br></br><textarea type="text" name="comment" rows="5" cols="40"></textarea>
        <br></br><br></br>
        <button type="button">Submit</button>
        </form>

    </div>
  );
};
  
export default Comments;
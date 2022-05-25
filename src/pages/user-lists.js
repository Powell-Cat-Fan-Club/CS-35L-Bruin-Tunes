import React from 'react';
import { getArtists } from "./artist-data";
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { useNavigate } from "react-router";

const UserList = () => {

  const [artists, setArtists] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/artists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setArtists(a);
    })
  }, [artists]);

  useEffect(() => {
    fetch (`http://localhost:5000/lists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setLists(a);
    })
  }, [lists]);


    const [form, setForm] = useState({
        username: "",
        userList: []
      });
      const navigate = useNavigate();
    
      function updateForm(value) {
        return setForm((prev) => {
          return {...prev, ...value};
        });
      }

    
    async function onSubmit(e) {
      //e.preventDefault();
      const newList = {...form};
      await fetch("http://localhost:5000/lists/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(newList),
      })
      .catch (error => {
        window.alert(error);
        return;
      });
    
      setForm({username:"", userList:[]});
      navigate("/userlist");
    }


    let displaySongs = (arr) =>
    {
      let theArr = [];

      for (let index = 1; index <= arr.length; index++)
      {
          theArr.push(
            <div>
                {"Artist " + index + ": " + arr[index - 1]}
            </div>
          )
      }
      return (
        <div>{theArr}</div>
      )
    }
    let displayLists = () => 
    {   
      return (
        <div>
             {lists.map((list, index) => 
                <div>
                  <br></br>
                    {list.username}
                    {displaySongs(list.userList)}
                </div>)}
        </div> 
      )
    }
    let displaySelector = () => 
        {    
                let myArr = [];
                for (let index = 1; index <= artists.length; index++)
                { 
                    myArr.push(
                        <div>
                            <fieldset>
                            <legend>{"Artist #" + index}</legend>
                            {artists.map((artist) => 
                            <div>
                                <label><input type="radio" id={artist.name} name={index} value={artist.name}
                                onChange={(e) => updateForm({userList: [...form.userList, e.target.value] })} />{artist.name}</label>
                            </div>)
                            }
                            </fieldset>
                        </div>
                    )
                }   

                return (
                <form onSubmit={onSubmit}>
                    <label><input type="text" name="name" id="name" placeholder="Your name"
                    onChange={(e) => updateForm({ username: e.target.value})} /></label>
                    {myArr}
                    <button type="submit">Submit</button>
                </form>
                
                );
        }

    return (
        <div>
            <h1>List your top artists!</h1>
                  {displaySelector()}
                  Current lists: <br></br>
                  {displayLists()}
        </div>
    )
}

export default UserList;
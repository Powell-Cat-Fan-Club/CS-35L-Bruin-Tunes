import React from 'react';
import { getArtists } from "./artist-data";
import { useState } from 'react';
import { Link} from "react-router-dom";
import { useNavigate } from "react-router";

const UserList = () => {

    let theArtists = getArtists();

    const [form, setForm] = useState({
        username: "",
        userList: new Array(5).fill(null)
      });
      const navigate = useNavigate();
    
      function updateForm(value) {
        return setForm((prev) => {
          return {...prev, ...value};
        });
      }
    
    
    async function onSubmit(e) {
      e.preventDefault();
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

    let displaySelector = (arrLength) => 
        {    
                let myArr = [];
                for (let index = 1; index <= theArtists.length; index++)
                { 
                    myArr.push(
                        <div>
                            <fieldset>
                            <legend>{"Artist " + index}</legend>
                            {theArtists.map((artist) => 
                            <div>
                                <label><input type="radio" id={artist.name} name={index} value={artist.name} />{artist.name}</label>
                            </div>)
                            }
                            </fieldset>
                        </div>
                    )
                }   

                return (
                <form onSubmit={onSubmit}>
                    <label><input type="text" name="name" id="name" placeholder="Your name" /></label>
                    {myArr}
                    <button type="submit">Submit</button>
                </form>
                
                );
        }

    return (
        <div>
            <h1>List your top artists!</h1>
                   {displaySelector(theArtists.length)}
        </div>
    )
}

export default UserList;
import React from 'react';
import { getArtists } from "./artist-data";
import { useState } from 'react';
import { Link} from "react-router-dom";

const UserList = () => {

    let theArtists = getArtists();

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
                <form>
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
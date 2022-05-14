import React from 'react';
import { getArtists } from "./artist-data";
import { useState } from 'react';
import { Link} from "react-router-dom";

const UserList = () => {

    let theArtists = getArtists();

    let displaySelector = (arrLength) => 
        {    
            let myArr = [];
            for (let index = 1; index <= arrLength; index++)
            { 
                myArr.push( 
                    <div>  
                    <label>{"Your number "  + index + " artist: "}</label>
                    <select>
                        {theArtists.map((artist) => 
                            <option>{artist.name}</option>
                        )}
                        </select>
                    <input type='button' value ='Submit'/>
                    </div>
                )
            }

            return myArr;          
        }

    return (
        <div>
            <h1>List your top artists artists!</h1>
            <form> 
                {displaySelector(theArtists.length)}
            </form>
        </div>
    )
}

export default UserList;
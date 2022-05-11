//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import { getArtists } from "./artist-data";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const List = () => {

  //Get artists
  let artists = getArtists();

  //Sort artists by ranking
  let toSort = [].concat(artists);
  toSort.sort((a,b) => a.ranking - b.ranking);
  
  
  //Function to display the list
  let displayRanking = () => {
    return (
    <div><ol><nav>
        {toSort.map((artist) => 
          <li>
            <Link to={'/artists/' + artist.name}>{artist.name}</Link>
            <p>{'Ranking number: ' + artist.ranking}<br/>
            Most liked album on artist: <br/>
            Most liked comment on artist: </p>
            </li>
        )}</nav> 
        </ol>
    </div>
    )
  }
  return (
    <div>
      <h1>Top 5 Artists</h1>
      {displayRanking()}
    </div>
  );
};
  
export default List;
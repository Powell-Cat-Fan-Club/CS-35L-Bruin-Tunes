//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import { getArtists } from "./artist-data";
import { useState } from 'react';
import { Link} from "react-router-dom";


const Charts = () => {

  //Get artists
  let theArtists = getArtists();
  let [userSearch, setUserSearch] = useState('');

  //Sort artists by ranking
  let sortedArtists = [].concat(theArtists);
  sortedArtists.sort((a,b) => a.ranking - b.ranking);
  
  //Function to display the list
  let displayRanking = () => {
    return (
    <div>

      {/* Filtering block */}
      <input placeholder='Search by genre' onChange={(e) => setUserSearch(e.target.value)} />
        <ol>
          <nav>
          {sortedArtists.filter((val) => {
            if (userSearch === "") {
              return val;
            }
            else if (val.genres.includes(userSearch.toLowerCase())) {
              return val;
          }
        }
          ).map((artist) => 
            <li>
              <Link to={'/artists/' + artist.name}>{artist.name}</Link>
              <p>{'Ranking number: ' + artist.ranking}<br/>
              {'Genres: ' + artist.genres} <br/>
              Most liked album on artist: <br/>
              Most liked comment on artist: </p>
            </li>
        )}
          </nav> 
        </ol>
    </div>
    )
  }
  return (
    <div>
      <h1>Top Artists</h1>
      {displayRanking()}
    </div>
  );
};
  
export default Charts;
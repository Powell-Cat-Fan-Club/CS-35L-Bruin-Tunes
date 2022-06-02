import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from "react-router-dom";


const Charts = () => {

  //Get artists
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/artists/`)
    .then ((res) =>res.json())
    .then((a) => {
      setArtists(a);
    })
  }, [artists]);

  let [userSearch, setUserSearch] = useState('');

  
  //Function to display the list
  let displayRanking = () => {
    //Sort artists by ranking
  let sortedArtists = [].concat(artists);
  sortedArtists.sort((a,b) => b.likes - a.likes);
    return (
    <div>

      {/* Filtering block */}
      <input placeholder='Search by genre' onChange={(e) => setUserSearch(e.target.value)} />
      
        <ol>
          <nav>
          {sortedArtists
          .filter((val) => {
            let genres = [];
            for (let i = 0; i<val.genres.length; i++)
            {
              genres.push(val.genres[i].toLowerCase());
            }
            if (userSearch === "") {
              return val;
            }
          for (let i = 0; i<genres.length; i++)
          {
            if (genres[i].startsWith(userSearch.toLowerCase()))
            {
              return val;
            }
          }
          })
          .map((artist) => 
            <li>
              <Link to={'/artists/' + artist.name}>{artist.name}</Link>
              <p>{'Likes: ' + artist.likes}<br/>
              {'Genres: ' } <br/>
              <ul>{artist.genres.map((genre) => <li key={genre}>{genre}</li>)}</ul> <br/>
              {/* Most liked album on artist: <br/>
              Most liked comment on artist:  */}
              </p>
            </li>
        )}
          </nav> 
        </ol>
    </div>
    )
  }
  return ( artists ?
    <div>
      <h1>Top Artists</h1>
      {displayRanking()}
    </div>
    : <h1> Loading... </h1>
  );
};
  
export default Charts;
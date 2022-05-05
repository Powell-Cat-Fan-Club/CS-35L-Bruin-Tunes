//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
import { getArtists } from "./artist-data";
const List = () => {

  let artists = getArtists();
  let toSort = [].concat(artists);
  toSort.sort((a,b) => a.ranking - b.ranking);
  
  let displayRanking = () => {
    return (
    <div>
      {toSort.map((artist) => <li>{artist.name + " Likes:" + artist.ranking}</li>)}
    </div>
    )
  }
  return (
    <div>
      <h1>Albums as ranked by UCLA students</h1>
      {displayRanking()}
    </div>
  );
};
  
export default List;
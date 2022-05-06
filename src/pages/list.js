//credit to https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
import React from 'react';
<<<<<<< HEAD
const List = () => {
  return (
    <div>
      <h1>List time!</h1>
=======
import { getArtists } from "./artist-data";
const List = () => {

  //Get artists
  let artists = getArtists();

  //Sort artists by ranking
  let toSort = [].concat(artists);
  toSort.sort((a,b) => a.ranking - b.ranking);
  
  //Function to display the list
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
>>>>>>> 24b551b29e109dde986996916b16108b2a05be95
    </div>
  );
};
  
export default List;
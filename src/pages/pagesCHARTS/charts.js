import React from 'react';
import { useState, useEffect } from 'react';
import { MiddleText } from '../pagesARTISTS/artistsStyle';
import { 
  ArtistLikes,
  ArtistName,
  ContentContainer,
  DivContainer,
  GenreDiv,
  GenreItem,
  GenreList,
  GenreTag,
  Header,
  NameDiv,
  NavLink, 
  RankItem, 
  RankList,
  RankNumber,
  SearchBar
} from './chartsStyle';

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
      <ContentContainer>
        {/* Filtering block */}
        <SearchBar placeholder='Search by genre' onChange={(e) => setUserSearch(e.target.value)} />
        <RankList>
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
                <RankItem to={'/artists/' + artist.name}>
                  <RankNumber/>
                  <NameDiv>
                    <ArtistName> {artist.name} </ArtistName>
                    <ArtistLikes> {'Likes: ' + artist.likes} </ArtistLikes>
                  </NameDiv>
                  <GenreDiv>
                    <GenreTag> {'Genres: ' } </GenreTag>
                    <GenreList> 
                      {artist.genres.map((genre) => 
                        <GenreItem key={genre}>
                          {genre}
                        </GenreItem>
                      )}
                    </GenreList>
                  </GenreDiv>
                  
                </RankItem>
              )
            }
          </nav> 
        </RankList>
      </ContentContainer>
    )
  }
  return ( artists ?
    <DivContainer>
      <Header>Top Artists</Header>
      {displayRanking()}
    </DivContainer>
    : 
    <DivContainer>
      <MiddleText> Loading ... </MiddleText> 
    </DivContainer>
  );
};
  
export default Charts;
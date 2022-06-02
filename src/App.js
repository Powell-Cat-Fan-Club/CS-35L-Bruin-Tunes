/***************************************************************************
*    Citation
*    Title: How to create a multi-page website using React.js ?
*    Author: namanjaingeeksforgeeks
*    Date: 2022
*    Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
*    Usage:Structure of this file
***************************************************************************/

import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/pagesMAIN';
import About from './pages/pagesABOUT/about';

import CommentBox from './pages/CommentBox';

import Charts from './pages/charts';

import Artists from './pages/pagesARTISTS/artists';
import ArtistTemplate from './pages/pagesARTISTS/artists-template';
import Albums from './pages/pagesARTISTS/albums';
import Songs from './pages/pagesARTISTS/songs';

import Login from './pages/pagesLOGIN/login'
import SignUp from './pages/pagesLOGIN/signup';

import UserList from './pages/user-lists';
import { ContentContainer, MiddleText } from './pages/pagesARTISTS/artistsStyle';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='about' element={<About/>} />
        <Route path='artists' element={<Artists/>} >
          <Route index element={
              <ContentContainer>
                <MiddleText>
                  Find your favorite artists!
                </MiddleText>
              </ContentContainer>
          }/>
          <Route path=':artistID' element={<ArtistTemplate/>} />
          <Route path=':artistID/:albumID' element={<Albums/>}/>
          <Route path=':artistID/:albumID/:songID' element={<Songs/>}/>
        </Route>
        <Route path='comments' element={<CommentBox/>} />
        <Route path='charts' element={<Charts/>} />
        <Route path='login' element={<Login/>} />
          <Route path='register' element={<SignUp/>} />
        <Route path='userlist' element={<UserList/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
    </Router>
);
}
  
export default App;

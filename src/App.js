import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/pagesMAIN';
import About from './pages/pagesABOUT/about';
import CommentBox from './pages/CommentBox';
import Charts from './pages/pagesCHARTS/charts';
import Artists from './pages/pagesARTISTS/artists';
import ArtistTemplate from './pages/pagesARTISTS/artists-template';
import Albums from './pages/pagesARTISTS/albums';
import Songs from './pages/pagesARTISTS/songs';
import Login from './pages/pagesLOGIN/login'
import SignUp from './pages/pagesLOGIN/signup';
import UserList from './pages/pagesLIST/user-lists';
import { ContentContainer, MiddleText } from './pages/pagesARTISTS/artistsStyle';
import { Header } from './style';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='about' element={<About/>} />
        <Route path='artists' element={<Artists/>} >
          <Route index element={
              <ContentContainer location="center">
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
            <main style={{ padding: "5rem"}}>
              <Header> Why are you here? There's nothing.</Header>
              <img style={{display:"none"}} src={"/image/ghostcat.jpg"} alt="oooooo a ghost" />
            </main>
          }
        />
    </Routes>
    </Router>
);
}
  
export default App;

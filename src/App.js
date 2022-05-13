import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Artists from './pages/artists';
import Comments from './pages/comments';
import About from './pages/about';
import List from './pages/list';
import ArtistTemplate from './pages/artist-template';
import Albums from './pages/albums';
import Login from './pages/pagesLOGIN/login';
import SignUp from './pages/pagesLOGIN/signup';
import Songs from './pages/songs';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='about' element={<About/>} />
        <Route path='artists' element={<Artists/>} >
            <Route path=':artistID' element={<ArtistTemplate/>} />
            <Route path=':artistID/:albumID' element={<Albums/>}/>
            <Route path=':artistID/:albumID/:songID' element={<Songs/>}/>
        </Route>
        <Route path='comments' element={<Comments/>} />
        <Route path='list' element={<List/>} />
        <Route path='login' element={<Login/>} />
          <Route path='register' element={<SignUp/>} />
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

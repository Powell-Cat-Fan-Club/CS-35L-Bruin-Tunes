import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Artists from './pages/artists';
import Comments from './pages/comments';
import Contact from './pages/contact';
import List from './pages/list';
import ArtistTemplate from './pages/artist-template';
import Albums from './pages/albums';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='artists' element={<Artists/>} >
            <Route path=':artistID' element={<ArtistTemplate/>} />
            <Route path=':artistID/:albumID' element={<Albums/>}/>
        </Route>
        <Route path='comments' element={<Comments/>} />
        <Route path='list' element={<List/>} />
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

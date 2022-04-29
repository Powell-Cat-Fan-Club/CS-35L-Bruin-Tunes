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
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/artists' element={<Artists/>} />
        <Route path='/comments' element={<Comments/>} />
        <Route path='/list' element={<List/>} />
    </Routes>
    </Router>
);
}
  
export default App;
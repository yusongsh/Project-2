import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import PlayList from './pages/PlayerList'
import ViewByPosition from './pages/ViewByPosition'
import PlayerDetails from './pages/PlayerDetails'
import Footer from './components/Footer'
import SocialFollow from "./SocialFollow"




function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'>
      
      <Nav />

    <h1>What up</h1>
    
    <Footer />

    </div>
    </div>
  );
}

export default App;

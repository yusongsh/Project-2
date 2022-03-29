import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import PlayList from './pages/PlayerList'
import ViewByPosition from './pages/ViewByPosition'
import PlayerDetails from './pages/PlayerDetails'
import Footer from './components/Footer'





function App() {
  return (
    <div className="App">
      <Nav />
    <h1>WHat up</h1>
    <Footer />
    </div>
  );
}

export default App;

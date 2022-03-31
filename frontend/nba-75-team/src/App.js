import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import ViewByPosition from './pages/ViewByPosition'
import PlayerDetails from './components/PlayerDetails'
import Footer from './components/Footer'
import Home from './pages/Home'
import PlayerList from './pages/PlayerList';
import { useState, useEffect } from 'react'
import axios from 'axios'



function App() {


  const [players, setPlayers] = useState([])


  const getPlayer = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    setPlayers(res.data)
    // console.log(res.data)
  }
 

  useEffect(() => {
    getPlayer()
  },[])



  return (

    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playerlist' element={< PlayerList />} />
          <Route path='/playerlist/:id' element={<PlayerDetails players={players} />} />
          <Route path='/viewByPosition' element={<ViewByPosition />} />
          <Route path='/about' element={<About />} /> 
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;

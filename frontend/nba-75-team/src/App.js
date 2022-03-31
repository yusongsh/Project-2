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
import Search from './components/Search';
import Position from './components/Position'

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

  const [positions, setPositions] = useState([])
  
  const getPostions = async () => {
    const res = await axios(`http://localhost:3001/api/positions`)
    setPositions(res.data)
    // console.log(res.data)
  }
  
  useEffect(() => {
    getPostions()
  },[])
  


  return (

    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home  players={players} />} />
          <Route path='/playerlist' element={< PlayerList players={players} />} />
          <Route path='/playerlist/:id' element={<PlayerDetails players={players} />} />
          <Route path='/viewbyposition/' element={<ViewByPosition />} />
          <Route path='/viewbyposition/:id' element={<Position players={players} positions={positions} />} />
          <Route path='/about' element={<About />} /> 
          {/* <Route path='/search' element={<Search  players={players} />} /> */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default App;

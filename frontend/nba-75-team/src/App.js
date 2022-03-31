import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import ViewByPosition from './pages/ViewByPosition'
import PlayerDetails from './components/PlayerDetails'
import Footer from './components/Footer'
import Home from './pages/Home'
import PlayerList from './pages/PlayerList';





function App() {




  return (

    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playerlist' element={< PlayerList />} />
          <Route path='/playerlist/:_id' element={<PlayerDetails />} />
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

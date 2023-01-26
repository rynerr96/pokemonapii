import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PublicPage from './pages/PublicPage'
import Pokedex from './pages/Pokedex'
import PokedexId from './pages/PokedexId'
import MainLayaut from './pages/MainLayaut'


function App() {
  

  const home = <Home />;
  const mainLayaut = <MainLayaut />;
  const pokedex = <Pokedex />;
  const pokedexId = <PokedexId />;
  const publicPage = <PublicPage />;

  return (
    <HashRouter>
      <div className="App">
      
        <Routes>

          <Route path='/' element={home} />

          <Route element={mainLayaut}>
            <Route path='/pokedex' element={pokedex} />
            <Route path='/pokedex/:id' element={pokedexId} />
          </Route>

          <Route path='/public' element={publicPage} />

        </Routes>

      </div>
    </HashRouter>


  )
}

export default App

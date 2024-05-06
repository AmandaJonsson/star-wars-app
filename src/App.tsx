import './App.css';
import { Films } from './pages/Films';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { FilmDetails } from './pages/FilmDetails';
import { Characters } from './pages/Characters';
import { CharacterDetails } from './pages/CharacterDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/film/:title" element={<FilmDetails />} />
        <Route path='/characters' element={<Characters />}/>
        <Route path='/characters/:name' element={<CharacterDetails />}/>
      </Routes>
    </div>
  );
}

export default App;

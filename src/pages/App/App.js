import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Starships from '../../components/Starships/Starships';
import StarShipsPage from '../../components/StarShipsPage/StarShipsPage';

function App() {
  const navTitle = 'Starwars Starships'

  return (
    <>
      <NavBar navTitle={navTitle} />
        <Routes>
          <Route path="/" element={<Starships />}/>
          <Route path="/starShips/:id" element={<StarShipsPage />}/>
        </Routes>
    </>
  )
}

export default App;

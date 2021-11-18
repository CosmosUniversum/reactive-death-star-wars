import { Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Starships from '../../components/Starships/Starships';


function App() {
  const navTitle = 'Starwars Starships'

  return (
    <>
      <NavBar navTitle={navTitle} />
        <Routes>
          <Route path="/" element={<Starships />}/>
        </Routes>
    </>
  )
}

export default App;

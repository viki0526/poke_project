import './App.css';
import Wild from './components/Wild'
import NavBar from './components/NavBar';
import Home from './components/Home';
import React, { useState } from "react";
import {Routes, Route } from "react-router";
import {BrowserRouter, Link} from "react-router-dom"


export default function App() {
  const [wildPokemons, setWildPokemons] = useState(['Bulbasaur', 'Charmander', 'Squirtle', 'Pidgey', 'Rattata', 'Pikachu',
  'Jigglypuff', 'Diglet', 'Machop', 'Tentacool', 'Geodude', 'Slowpoke', 'Magnemite', 
  'Hitmonlee', 'Chansey', 'Mr. Mime'])

  return (
    <BrowserRouter>
      <NavBar />
      <main className='mt-3'>
        <Routes>
          <Route exact path="Home" element={<Home/>}/>
          <Route exact path="Wild" element={<Wild/>}/>
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

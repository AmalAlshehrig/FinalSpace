import React from 'react'
import{Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from './Card';
function Rout() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/:id' element={<Card/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Rout
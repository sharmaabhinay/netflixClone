// import { useState,React } from 'react';
import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router';
import Home from './components/home/Home';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Home />}></Route>
        <Route path='/recentlyadded' element={<Home />}></Route>
        <Route path='/mylist' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App

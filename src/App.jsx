import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
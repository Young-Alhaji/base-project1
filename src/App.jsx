import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from './Pages/NotFound';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes> 
    </>
  )
}

export default App;

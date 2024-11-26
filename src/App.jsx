import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import NotFound from './Pages/NotFound';
import Subscribe from './Pages/Subscribe';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path='/subscribe' element={<Subscribe/>}/>
      </Routes> 
    </>
  )
}

export default App;

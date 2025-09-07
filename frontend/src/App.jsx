import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './components/Success.jsx';
import Fail from './components/Fail.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<Success />} />
        <Route path='/fail' element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

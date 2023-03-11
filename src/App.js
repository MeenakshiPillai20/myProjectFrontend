import React from 'react';
import './App.css';
import './style.css';


import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DataState from './context/DataState';

function App() {
  return (
    <>
      <DataState>  
          <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
      </DataState>  
    </>
  );
}

export default App;

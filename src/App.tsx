import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Create } from './Components/Create';
import { View } from './Components/View';
import { Update } from './Components/Update';
import { Delete } from './Components/Delete';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

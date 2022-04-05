import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Layout, NoPage } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path='/' element={<Layout />} />
            <Route path='/Home' element={<Home />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

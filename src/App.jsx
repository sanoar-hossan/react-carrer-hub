import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
    </div>
  );
};

export default App;
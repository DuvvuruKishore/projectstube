import React from 'react';
import './App.css';
import Component from './Component';

export const UserContext=React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={'vishwas'}>
      <Component/>
      </UserContext.Provider>
    </div>
  )
}

export default App

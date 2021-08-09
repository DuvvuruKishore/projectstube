import React from 'react';
import './App.css';
import Movie from './Movie';
import {UserProvider} from './Context';

function App() {
  return (
    <div className="App">
    <UserProvider>
    <Movie/>
    </UserProvider>
     
    </div>
  );
}

export default App;

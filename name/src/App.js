import React, { useState } from 'react';
import './App.css';
import Input from './Input';

function App() {
const [name,setName]=useState('');
const [mail,setMail]=useState('');

  return (
    <div className="App">
    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
    <input value={mail} onChange={(e)=>setMail(e.target.value)}></input>
    <Input name={name} mail={mail}/>
    </div>
  );
}

export default App;

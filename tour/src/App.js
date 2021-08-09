import { Button, Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Tour from './Tour';

function App() {
  const [state,setState]=useState([]);

 const url=' https://course-api.com/react-tours-project';

 useEffect(()=>{
   const tour=async()=>{
 await fetch(url).then(res=>res.json()).then((data)=>{
   console.log(data);
   setState(data);
 })
   }
   tour();
 },[]);

 

  const removeTour = (id) => {
    const newTours = state.filter((tour) => tour.id !== id)
    setState(newTours)
  }
  return (
    <div className="App">
    <h1>tour</h1>
      {state.map((data)=>(
      
      
        <Tour data={data} removeTour={removeTour}/>
      
        
      ))}
    
    </div>
  );
}

export default App;

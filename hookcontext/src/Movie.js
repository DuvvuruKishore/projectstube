import React,{useContext} from 'react';
import {UserContext} from './Context'

function Movie() {
    const user=useContext(UserContext);
    return (
        <div>
           {user.map((movie)=>(
               <h1>{movie.name}</h1>
           ))} 
        </div>
    )
}

export default Movie

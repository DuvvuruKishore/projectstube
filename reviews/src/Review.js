import React from 'react';
import Data from './data';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import './Review.css';

function Review() {
    const [index,setIndex]=useState(0);
    const { name, job, image, text } = Data[index];

const changeIndex=(number)=>{
    if(number>Data.length-1){
        return 0;
    }
    if(number<0){
        return Data.length-1;
    }
    return number
}


const previousReview=()=>{
    
    setIndex((index)=>{
        const newIndex=index-1;
        return changeIndex(newIndex);
    });
}
const nextReview=()=>{

    setIndex((index)=>{
    const newIndex=index+1;
      return changeIndex(newIndex);
    });
}


    return (
        
        <Card className="review">
        <CardContent>
        <img src={image} alt="person"/>
        <h2>{name}</h2>
        <Typography>{job}</Typography>
        <p>{text}</p>
        </CardContent>
        <button onClick={previousReview}>previous</button>
        <button onClick={nextReview}>next</button>
        
        </Card>
        

    
    )
}

export default Review

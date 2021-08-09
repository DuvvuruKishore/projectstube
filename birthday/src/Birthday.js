import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './Birthday.css';

const db=[
    {
    name:'kishore',
    age:'24',
    avatar:'k'
    },
    {
      name:'kilye',
      age:'7',
      avatar:'l'
      },
      {
        name:'vam',
        age:'22',
        avatar:'m'
        },
  ]


function Birthday() {
      
const [value,setvalue]=useState(db);
console.log(value);

    return (
        <div>
        <Card className="birthday">
        <div className="wishes">
        <h2>birthday Wishes</h2>
        </div>
        {value.map((birthday)=>(
            
        
        <CardContent className="birthdayContent">
        <div className="avatar" ><Avatar >{birthday.avatar}</Avatar></div>
        <div className="name">
        <Typography variant="h5" gutterBottom>
           {birthday.name}
          </Typography>
          <Typography variant="h8" color="textSecondary">
            {birthday.age} years
          </Typography>
          </div>
          </CardContent>
         
          ))}
          <Button color="primary" onClick={()=>setvalue([])}>clearall</Button>
          </Card>
        </div>
    )
}

export default Birthday

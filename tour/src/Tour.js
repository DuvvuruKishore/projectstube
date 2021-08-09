import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

function Tour({data,removeTour}) {
    
    return (
        
        <Card>
        <CardContent>
        <img src={data.image} alt="place"/>
          <Typography color="textSecondary" gutterBottom>
            {data.name}
          </Typography>
          <Typography>
          {data.info}
          </Typography>
          </CardContent>
          <Button onClick={() => removeTour(data.id)}>I am not interested</Button>
          </Card>    
        
    )
}

export default Tour

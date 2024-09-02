import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
        sx={{height:345}}
        image='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'/>

        <CardContent>
            <Typography variant='h5' >
                Indian Fast Food
            </Typography>

            <Typography variant='body2' >
                50% off on your first order
            </Typography>

            <div className='py-2 space-y-2'>
                <p>{"Bangalore"}</p>
                <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
                <p className='text-sm text-red-500'>February 15, 2024 1:00 AM</p>

            </div>
        </CardContent>

        {false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}

      </Card>
    </div>
  )
}

export default EventCard

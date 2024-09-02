import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='m-5 w-[18rem]'>

        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover'
                  src="https://c8.alamy.com/comp/2M92K5J/super-bowl-or-football-theme-food-frame-pizza-hamburgers-wings-snacks-and-sides-above-view-on-a-dark-wood-background-2M92K5J.jpg" alt="" />
                  
          <Chip
            size="small"
            className="absolute top-2 left-2"
            color={true?"success":"error"}
            label={true?"open":"closed"}
            />
        </div>

        <div className="p-4 textPart lg:flex w-full justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-lg">Indian Fast Food</p>
            <p className="text-gray-500 text-sm">
            {`Pizza`}
            </p>

          </div>

          <div>
            <IconButton>
              {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
          </div>

        </div>

    </Card>
  )
}

export default RestaurantCard;

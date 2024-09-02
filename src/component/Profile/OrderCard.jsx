import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img className='h-15 w-16' 
        src="https://c8.alamy.com/comp/2M92K5J/super-bowl-or-football-theme-food-frame-pizza-hamburgers-wings-snacks-and-sides-above-view-on-a-dark-wood-background-2M92K5J.jpg" alt=""/>

        <div>
            <p>Pizza</p>
            <p>$399</p>
        </div>
      </div>

      <div>
        <Button  className="cursor-not-allowed">
            completed
        </Button>
      </div>
    </Card>
  )
}

export default OrderCard

import React from 'react'
import {Box, Modal} from '@mui/material'
import { style } from '../component/Cart/Cart';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
        navigate("/")
    }
  return (
    <>
    <Modal onClose={handleOnClose} open={ 
        location.pathname==="/account/register" 
        || location.pathname==="/account/login"
        
    }>
        <Box sx={style}>
            {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
        </Box>

    </Modal>
    </>
  )
}

export default Auth

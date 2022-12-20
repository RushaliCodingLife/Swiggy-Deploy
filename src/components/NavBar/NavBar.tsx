import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#ffff' }}>
          <Toolbar className='container-xl'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight:400, fontSize:'19px' }}>
            <Link to='/' className='linkNavbar'>
              <img src={require('../util/Images/2.png')} alt='icon' width='49px' height='49px' />
               Swiggy</Link>
            </Typography>
            <Typography  className='px-2' variant="h6"  sx={{ color: 'black' , fontWeight:400, fontSize:'15px'  }}>
            <Link to='/restaurantslist' className='linkNavbar'> Restaurants list</Link>
            </Typography>
            
            <Typography className='ms-1 px-5' variant="h6"  sx={{ color: 'black' , fontWeight:400 , fontSize:'15px' }}>
            <Link to='/signin' className='linkNavbar'> Sign In</Link>
            </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
    </>


  );
}
export default NavBar

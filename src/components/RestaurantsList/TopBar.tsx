import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button/Button'
import React, { useState } from 'react'
import DataFetch from './DataFetch';




function TopBar() {
  const [hide,setHide] = useState(false);

  return (
    <>

      <div className='container-xl'>

        <Box display={'flex'} justifyContent={'space-between'}>

          {/* <Box display={'flex'} alignSelf={''}> */}
           {!hide && <Button onClick={() => {
              setHide(true)
            }} variant="contained" color="success" sx={{ paddingInline: '76px', marginTop: '30px' }}>
              Show
              </Button>}
          
            {hide && <Button onClick={() => {
              setHide(false) }} variant="contained" color="error" sx={{ paddingInline: '85px', marginTop: '30px' }}>
              Hide
            </Button>}
            
        {/* </Box> */}
        </Box>
        {hide && <Box>
          <Typography variant="h2" marginTop={10}>
          <DataFetch/>
          </Typography>
         </Box>}
      </div>
    </>
  )
}

export default TopBar

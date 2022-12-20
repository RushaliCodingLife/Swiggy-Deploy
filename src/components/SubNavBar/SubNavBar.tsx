import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ImportExportIcon from '@mui/icons-material/ImportExport'

function SubNavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} marginTop={1}>
        <AppBar position="static" sx={{ backgroundColor: '#ffff' }}>
          <Toolbar className='container-xl'>
            <Typography className='typographytxt_NavBar' variant="h4" component="div" sx={{ flexGrow: 1, color: 'black' , fontWeight:400, fontSize:'19px' }}>
              1145 Restaurants
            </Typography>
            <Typography className='typographytxt_NavBar px-5' variant="h6"  sx={{ color: 'black' , fontWeight:400, fontSize:'15px' }}>
              Relevance
            </Typography>
            <Typography className='typographytxt_NavBar px-3 ms-3' variant="h6" sx={{ color: 'black' , fontWeight:400, fontSize:'15px' }}>
              Delivery Time
            </Typography>
            <Typography className='typographytxt_NavBar ms-5' variant="h6"  sx={{ color: 'black' , fontWeight:400, fontSize:'15px' }}>
              Filters
              <ImportExportIcon fontSize='small'  />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </div>

  )

}
<hr />
export default SubNavBar

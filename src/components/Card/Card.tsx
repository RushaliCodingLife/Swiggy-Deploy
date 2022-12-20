import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';



export default function MediaCard() {
    return (

        <>
        <div className='container-fluid cardbackgroundColor'>
        <Box className='container-xl' >
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Card className='card' sx={{ maxWidth: 300 }}>
                        <CardMedia className='image'
                            component="img"
                            height="140"
                            image={require('../util/Images/3.png')} />
                    </Card>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Card className='card' sx={{ maxWidth: 300 }}>
                        <CardMedia className='image'
                            component="img"
                            height="140"
                            image={require('../util/Images/4.png')} />
                    </Card>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Card className='card' sx={{ maxWidth: 300 }}>
                        <CardMedia className='image'
                            component="img"
                            height="140"
                            image={require('../util/Images/1.png')} />
                    </Card>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Card className='card' sx={{ maxWidth: 300 }}>
                        <CardMedia className='image'
                            component="img"
                            height="140"
                            image={require('../util/Images/5.png')} />
                    </Card>
                </div>
            </div>
            </Box>
            </div>




        </>

    );
}
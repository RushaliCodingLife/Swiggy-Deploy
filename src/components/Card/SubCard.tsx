import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function SubCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box marginTop='30px'>
            <div className='container-xl ' >

                <div className="row">

                    {/* Card 1 */}

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">

                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('../util/Images/6.jpg')}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                </ExpandMore>
                            </CardActions>
                        </Card>

                    </div>

                  

                        {/* Card 2 */}

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('../util/Images/7.jpg')}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                </ExpandMore>
                            </CardActions>
                        </Card>
                    </div>

                    
                        {/* Card 3 */}

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">

                        <Card  className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('../util/Images/8.jpg')}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                </ExpandMore>
                            </CardActions>
                        </Card>
                    </div>



{/* Card 4 */}
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <Card className='card' sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('../util/Images/9.jpg')}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                </ExpandMore>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </Box>
    );
}



export default SubCard
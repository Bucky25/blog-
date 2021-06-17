import React from 'react';
import './Card.css';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { selectUser } from '../features/counter/userSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '80px',
    // borderBox: '1px solid'
  },
  spacing: {
    marginRight: '120px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },  
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(selectUser);
  
  const handleClick = () => {
    if (user) {
      history.push('/blog')
    }
    else {
      history.push('/login')
    }
  };

  return (
    <Card className='card'>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"
        title="Paella dish"
      />
      <CardContent>
        <p><strong>Title</strong></p>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.spacing} aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button style={{ marginLeft:"100px" }} size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
      
    </Card>
  );
}


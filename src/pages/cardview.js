import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Button from '@material-ui/core/Button'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import 'react-card-with-image/dist/index.css'
import React from 'react'
import './cardview.css'

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

function CardWithImage() {
  const classes = useStyles();

  return (
    <div className="cardview">
      <div className="blog_image">
        <CardMedia
          className={classes.media}
          image="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"
          title="Paella dish"
        />
      </div>
      <div className="blog_content">
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
      <CardContent>
        <p style={{fontSize:'24px',left:'0px'}}><strong>Title</strong></p>
        <Typography style={{fontSize:'18px'}} variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.This impressive 
          paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{marginTop:"10px"}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.spacing} aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button style={{ marginLeft:"50px" }} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </div>

    </div>
  );

}

export default CardWithImage;



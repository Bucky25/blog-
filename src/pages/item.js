import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '80px',
  },
  spacing: {
    paddingRight: '120px'
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

  const handleClick = () => {
    history.push('/blog')
  };

  return (
    <Card className={classes.root}>
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
        <Button size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
      
    </Card>
  );
}


//         <Card style={{ width: '30rem'}}> 
//                         <Card.Img variant="top" src="https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png" />
//                         <Card.Body>
//                             <Card.Title>Card Title</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the bulk of
//                                 the card's content.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//     )
// }

        //             <div className="card">
        //     <a>
        //         <img className="card-image" src="https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png">

        //         </img>
        //     </a>
        //     <div class="card-content">
        //         <a class="card-content-link" href="">
        //             <header class="card-content-header">
        //                 <div class="card-primary-tag">Automobile</div>
        //                 <h2 class="card-title">Steering at 190kmph</h2>
        //             </header>
        //             <section class="card-excerpt">
        //                 <p>Designing a lightweight, strong, customizable, comfortable steering wheel for a racecar</p>
        //             </section>
        //         </a>
        //         <footer class="card-meta">
        //             <ul class="author-list">
        //                 <li class="author-list-item">
        //                     <div class="author-name-tooltip">
        //                         Ankit Sanghvi
        //                     </div>
        //                     <a href="" class="static-avatar">
        //                         <img class="author-profile-image" src="https://thumbs-prod.si-cdn.com/VWUfYczkW75icGsaiu8RFwiyAoY=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/29/0f/290fb8c0-1872-46e5-8c12-235742905def/science_smithsonian_magazine_booklist_2019.png" />
        //                     </a>
        //                  </li>
        //             </ul>
        //             <div class="card-byline-content">
        //                 <span><a href="">Ankit Sanghvi</a></span>
        //                 <span class="card-byline-date"><time datetime="2021-04-16">16 Apr 2021</time> <span class="bull">•</span> 9 min read</span>
        //             </div>
        //         </footer>
        //     </div>
        // </div>



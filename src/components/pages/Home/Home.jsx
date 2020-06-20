import React from "react";
import Layout from "../../shared/Layout";

import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    // backgroundColor: "black",
    // color: "white",
  },
  media: {
    height: 200,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className="img-container">
        <img
          src="https://avatars0.githubusercontent.com/u/39171176?s=460&u=ca3e045a92e31b6c19180496fb71d6aab41e0098&v=4"
          alt="avatar"
          className="profile-img"
        />
      </div>
      <div className="home-container">
        <div className="name-home">
          <h1>hi, I'm Abraham</h1>
        </div>

        <div className="welcome-message">
          <p>I'm a Junior Software Engineer grad</p>
          <p>from GA's Software Engineer</p>
          <p>immersive program.</p>
          <p>Feel free to look around...</p>
        </div>
        <div className="home-projects-title">Latest Projects</div>

        <div className="home-projects-container">
          <div className="card-section">
            <hr />
            <div className="hr-divider"></div>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/abetavarez/image/upload/v1592666031/Screen_Shot_2020-06-20_at_11.13.01_AM_noe2tf.png"
                  title="instacart-project-website"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    InstaCart
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I had the amazing oportunity to work with a team of other
                    four software engineers and three UI/UX designers, to create
                    this InstaCart prototype.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="http://instacart-costco.surge.sh/welcome"
                >
                  Visit Site
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/AbeTavarez/Instacart-Costco"
                >
                  Visit Repo
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card-section">
            <hr />
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    InstaCart
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

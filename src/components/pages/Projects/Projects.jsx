import React, { Component } from "react";

import "./Projects.css";
import Layout from "../../shared/Layout";
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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Layout>
      <div className="projects-container">
        <div className="card-section">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1592620250/Screen_Shot_2020-06-19_at_10.30.27_PM_wofq1e.png"
                title="stayhomecookhome-website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  #StayHomeCookHome
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Helping people from around the world to find quick easy and
                  healthy recepies to cook at home and stay safe from the
                  #covid19 virus.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://pages.git.generalassemb.ly/AbrahamEfrenTavarez/StayHomeCookHome/"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/-StayHomeCookHome"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="card-section">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1592621658/Screen_Shot_2020-06-19_at_10.52.40_PM_wzvrar.png"
                title="streamnetfy-website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Streamnetfy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://streamnetfy.netlify.app/"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/Streamnetfy"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="card-section">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1592622098/Screen_Shot_2020-06-19_at_11.01.22_PM_nds2kr.png"
                title="command-blog-website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CommandBlog
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
        <div className="card-section">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
    </Layout>
  );
}

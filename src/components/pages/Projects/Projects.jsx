import React, { Fragment } from "react";

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
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 200,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth='fixed'>
      <div className="project-title">
        <div className="recent">
          RECENT PROJECTS{" "}
          <img
            src="https://img.icons8.com/officel/60/000000/deployment.png"
            className="p-img"
          />
        </div>
      </div>
      <div className="projects-container">
        <h2>Frelance Projects</h2>
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
                  Provides easy recipies and information to the public to stay
                  save when shopping during #covid19 virus.
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Technologies: HTML, CSS, JavaScript, Responsive Design.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://www.stayhomecookhome.com/"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/-StayHomeCookHome"
                target="_blank"
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
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606275294/IMG_1343_2_dbqszh.jpg"
                title="motorcycle-project-website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Motorcycle & Tire Shop Business Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Consulted and created a website for a small business owner.
                  Worked with the client throughout the project to help them
                  create an online presence and driving new clients to their
                  business by setting search engine optimization.
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Stack: HTML, CSS, JavaScript, SEO, UXUI, Deployment.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://www.davidsmechanic.shop/"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/david_tire_shop"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>
<div>
        <h2>Hackatons/Group Projects</h2>
        <div className="card-section">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://media.giphy.com/media/MF1XrtS1F0YrC21R3K/giphy.gif"
                title="instacart-project-website"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  InstaCart
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  I had the amazing oportunity to collaborate with a team of
                  software engineers and UI/UX designers, to replicate the
                  e-commerce site InstaCart.
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Technologies: React, JavaScript, NodeJS, Express, Mongoose,
                  MongoDB, UXUI.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="http://instacart-costco.surge.sh/welcome"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/Instacart-Costco"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>
        </div>

        <div>
          <h2>Personal Projects</h2>
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
                  Full Stack Blog Application build with Authentication using
                  JWT Tokens. Users that sign-up can create and post articles.
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, Ruby on Rails, PostgreSQL.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://commandblog.netlify.app/"
                target="_blank"
              >
                Visit site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/CmdBlog"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>
        </div>


        {/* <div className="card-section">
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
                  Full Stack Blog Application build with Authentication using
                  JWT Tokens. Users that sign-up can create and post articles.
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, Ruby on Rails, PostgreSQL.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://commandblog.netlify.app/"
                target="_blank"
              >
                Visit site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/CmdBlog"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div> */}
        {/* <div className="card-section">
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
                  Website that can help you to find tv shows. Get show rating,
                  gender, images, network, show summary and more.
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  Stack: ReactJS.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://streamnetfy.netlify.app/"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/AbeTavarez/Streamnetfy"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div> */}
      </div>
    </Container>
  );
}

import React from "react";

import "./Projects.css";
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
    <Container maxWidth='fixed' className='main-cont'>
      <div className="project-title">
        <h1>
          PROJECTS
        </h1>
        <hr/>
      </div>
      
      <div  className="projects-container">
        <h2>Frelance Projects</h2>
        <hr/>

        
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
                variant='outlined'
                href="https://www.davidsmechanic.shop/"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                variant='outlined'
                href="https://github.com/AbeTavarez/david_tire_shop"
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
                variant='outlined'
                href="https://www.stayhomecookhome.com/"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                size="small"
                color="primary"
                variant='outlined'
                href="https://github.com/AbeTavarez/-StayHomeCookHome"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
        </div>
        </div>



    <div className='projects-container'>
        <h2>Hackatons/Group Projects</h2>
        <hr/>
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
                  eCommerce site InstaCart.
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
                  variant='outlined'
                href="http://instacart-costco.surge.sh/welcome"
                target="_blank"
              >
                Visit Site
              </Button>
              <Button
                  size="small"
                  variant='outlined'
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

        <div className='projects-container'>
        <h2>Personal Projects</h2>
        <hr/>
          <div className="card-section">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606279133/IMG_1346_2_ehte5p.jpg"
                title="content-type store"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Content-Type: Store
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Fully functional eCommerce web-site using ReactJS, Redux, NodeJS, Express and BootStrap.
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, NodeJS, Redux, Express.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant='outlined'
                href="http://www.theoriginalprogrammerwristband.com/"
                target="_blank"
              >
                Visit site
              </Button>
              <Button
                size="small"
                  color="primary"
                  variant='outlined'
                href="https://github.com/AbeTavarez/CmdBlog"
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
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606279384/IMG_1348_gmhkvo.jpg"
                title="influencercv"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Influencer CV
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Social media site for Influencers, Content-Creators, Stremers and more...
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, NodeJS, Redux, Express.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant='outlined'
                href="http://www.theoriginalprogrammerwristband.com/"
                target="_blank"
              >
                Visit site
              </Button>
              <Button
                size="small"
                  color="primary"
                  variant='outlined'
                href="https://github.com/AbeTavarez/CmdBlog"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
          </div>
          
        </div>
    </Container>
  );
}

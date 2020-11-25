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
import clouds from "../../../assets/cloud-computing.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    maxHeight: 800,
  },
  media: {
    height: 200,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div className="home-container">
        <div className="welcome-message">
          <div className="name-home">
            <h1>hi, I'm Abraham</h1>
            <img src={clouds} alt="cloud" className="cloud" />
          </div>
          <h2>I'm a Junior Software Engineer</h2>
        </div>

        <div className="aboutme">
          <hr />
          <div>
            <h2>About me</h2>
          </div>
          <div className="bio">
            {" "}
            <p>
              I'm a New Yorker who is passionate about tech and software
              development. I get to attend many tech events and meetups all
              around the city which have all been an amazing experience.
            </p>
            <p>
              I have been using a wide range of technologies to create fun and
              modern websites and webapps including:
            </p>
            <p>
              <span style={{ fontStyle: "italic" }}> Javascript</span>,
              <span style={{ fontStyle: "italic" }}> React</span>,{" "}
              <span style={{ fontStyle: "italic" }}> Node</span>,{" "}
              <span style={{ fontStyle: "italic" }}> Express</span>,
              <span style={{ fontStyle: "italic" }}> MongoDB</span>,
              <span style={{ fontStyle: "italic" }}> PostgreSQL</span>,
              <span style={{ fontStyle: "italic" }}> Ruby </span>
              <span style={{ fontStyle: "italic" }}> Rails</span>,
              <span style={{ fontStyle: "italic" }}> Python</span> and more.
              <br /> <br />
            </p>
          </div>

          <p className="last-p">
            I'm seeking a challenging and fun position, where I can share
            everything I have to offer to the tech community.
          </p>
          <hr />
        </div>

        <div className="icons-media">
          <img
            src="https://img.icons8.com/dusk/64/000000/html-5.png"
            style={{ padding: "10px" }}
            alt="html-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/css3.png"
            style={{ padding: "10px" }}
            alt="css-icons"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/javascript.png"
            style={{ padding: "10px" }}
            alt="javascript-icon"
          />
          <img
            src="https://img.icons8.com/offices/60/000000/react.png"
            style={{ padding: "10px" }}
            alt="react-js-icon"
          />
          <img
            src="https://img.icons8.com/color/64/000000/nodejs.png"
            style={{ padding: "10px" }}
            alt="node-js-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/ruby-programming-language.png"
            style={{ padding: "10px" }}
            alt="ruby-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/python.png"
            style={{ padding: "10px" }}
            alt="python-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/npm.png"
            style={{ padding: "10px" }}
            alt="npm-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/git.png"
            style={{ padding: "10px" }}
            alt="git-icon"
          />

          <img
            src="https://img.icons8.com/color/48/000000/console.png"
            style={{ padding: "10px" }}
            alt="command-line-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/api.png"
            style={{ padding: "10px" }}
            alt="api-icon"
          />
          <img
            src="
            https://img.icons8.com/bubbles/48/000000/amazon.png"
            style={{ padding: "15px" }}
            alt="aws-icon"
          />
        </div>

        <div className='home-projects-title name-home'>
          <h2>Articles</h2>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/abetavarez/image/upload/v1606278870/IMG_1345_3_dxnsql.jpg"
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
                    I had the amazing oportunity to collaborate with a team of
                    software engineers and UI/UX designers, to replicate the
                    e-commerce site InstaCart.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, NodeJS.
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
                  color="primary"
                  variant='outlined'
                  href="https://github.com/AbeTavarez/Instacart-Costco"
                  target="_blank"
                >
                  Visit Repo
                </Button>
              </CardActions>
            </Card>
        </div>


        <div className="home-projects-title name-home">RECENT PROJECTS</div>
        <img
          src="
          https://img.icons8.com/color/68/000000/jenkins.png"
          alt="deployment-icon"
          className="sir"
        />

        <div className="home-projects-container">
          <div className="card-section">
            <hr />

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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I had the amazing oportunity to collaborate with a team of
                    software engineers and UI/UX designers, to replicate the
                    e-commerce site InstaCart.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: ReactJS, NodeJS.
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
                  color="primary"
                  variant='outlined'
                  href="https://github.com/AbeTavarez/Instacart-Costco"
                  target="_blank"
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
                  image="https://res.cloudinary.com/abetavarez/image/upload/v1592620250/Screen_Shot_2020-06-19_at_10.30.27_PM_wofq1e.png"
                  title="stayhomecookhome-website"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    #StayHomeCookHome
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Provides easy recipies and information to the public to stay
                    save when shopping during #covid19 virus.
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: HTML, CSS, JavaScript.
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


        </div>

        <div className="home-projects-container">
          <div className="card-section">
            {/* <Card className={classes.root}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
            </Card> */}
          </div>

          <div className="card-section">
            {/* <Card className={classes.root}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Full Stack Blog Application build with Authentication using
                    JWT Tokens. All users can read articles. Users that sign-up
                    can create and post articles.
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
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
            </Card> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

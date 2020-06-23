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
          <div className="img-container">
            <div className="img-title">
              <img
                src="https://res.cloudinary.com/abetavarez/image/upload/v1592839319/117FF774-687A-4770-BE37-A691F898B74B_1_105_c_h8cmno.jpg"
                alt="avatar"
                className="profile-img"
              />
            </div>
            <div className="name-home">
              <h1 style={{ padding: "10px" }}>hi, I'm Abraham</h1>
              <p>I'm a Junior Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="aboutme">
          <hr />
          <h2>About me</h2>
          <p>
            I am a New Yorker who is passionate about tech and software
            development.
          </p>

          <p>
            I get to attend many tech events and meetups all around my city
            which have all been an amazing experience.
          </p>
          <p>
            I have been using a wide range of technologies including{" "}
            <span style={{ fontStyle: "italic" }}> Javascript</span>,
            <span style={{ fontStyle: "italic" }}> ReactJS</span>,{" "}
            <span style={{ fontStyle: "italic" }}> NodeJS</span>,{" "}
            <span style={{ fontStyle: "italic" }}> Express</span>,
            <span style={{ fontStyle: "italic" }}> Ruby On Rails</span>,{" "}
            <span style={{ fontStyle: "italic" }}> Python</span>
          </p>
          <p>to create fun and modern websites and webapps.</p>
          <p>I am seeking a challenging and fun position.</p>
          <p>
            I am very excited to work on creative team projects where I can
            share everything I have to offer to the tech community.
          </p>
        </div>

        <div className="icons-media">
          <img
            src="https://img.icons8.com/dusk/64/000000/html-5.png"
            style={{ padding: "3px" }}
            alt="html-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/css3.png"
            style={{ padding: "3px" }}
            alt="css-icons"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/javascript.png"
            style={{ padding: "3px" }}
            alt="javascript-icon"
          />
          <img
            src="https://img.icons8.com/offices/60/000000/react.png"
            style={{ padding: "3px" }}
            alt="react-js-icon"
          />
          <img
            src="https://img.icons8.com/color/64/000000/nodejs.png"
            style={{ padding: "3px" }}
            alt="node-js-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/ruby-programming-language.png"
            style={{ padding: "3px" }}
            alt="ruby-icon"
          />
          <img
            src="https://img.icons8.com/dusk/64/000000/python.png"
            style={{ padding: "3px" }}
            alt="python-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/npm.png"
            style={{ padding: "3px" }}
            alt="npm-icon"
          />
          <img
            src="https://img.icons8.com/color/48/000000/git.png"
            style={{ padding: "3px" }}
            alt="git-icon"
          />
        </div>

        <div className="home-projects-title">Latest Projects</div>

        <div className="home-projects-container">
          <div className="card-section">
            <hr />

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
                  <Typography variant="body2" color="textSeconry" component="p">
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

          <div className="card-section">
            <hr />
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
            </Card>
          </div>
        </div>

        <div className="home-projects-container">
          <div className="card-section">
            <hr />
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
                  href="https://pages.git.generalassemb.ly/AbrahamEfrenTavarez/StayHomeCookHome/"
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
        </div>
      </div>
    </Layout>
  );
}

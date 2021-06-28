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
          <div className="name-home">
          <h3>Abraham E. Tavarez</h3>
            <img src="https://res.cloudinary.com/abetavarez/image/upload/v1612810161/WIN_20210204_10_33_48_Pro-removebg-preview_5_npx6we.png" alt="user-pic" className="user-pic" />
            
          </div>
          <h3>Software Engineer | AWS Cloud Engineer | DevOps</h3>
        </div>
        
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abrahametavarez/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a
            href="https://github.com/AbeTavarez"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          {/* DEV */}
          <a
            href="https://dev.to/abetavarez"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-dev"></i>
          </a>
          <a
            href="mailto:abetavarez@icloud.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fas fa-envelope-square"></i>
          </a>
        </div>

        <div className="aboutme">
          <hr />
          <div>
            <h2>Whoami ?</h2>
          </div>
          <div className="bio">
            {" "}
            <p>
              I'm a New Yorker who is passionate about tech and software
              development. 
            </p>
            <p>What I love the most about software development is the ability to create tools that can reach and change the life of millions of people around the world.</p>
            <p>
              I've been using a wide range of technologies to create functional and secure modern desktop/web applications and command line utilities using:
            </p>
            <p className="lang">JavaScript, React, Redux, NodeJS, Express, MongoDB, Python, Linux, Docker, Apache, PostgreSQL, Ruby, Rails and other technologies. 
              <br /> <br />
            </p>
          </div>

          <div>
          <p>Please take a few minutes to check my lastest projects.</p>
            
         </div>
          <hr />
        </div>

        <div className="icons-media">
        <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
               
                alt="html-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
             
                alt="css-icons"
              />
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
           
                alt="javascript-icon"
              />
              <img
                src="https://img.icons8.com/offices/48/000000/react.png"
                style={{ padding: "3px" }}
                alt="react-js-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                style={{ padding: "3px" }}
                alt="node-js-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"
           
                alt="ruby-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/python.png"
               
                alt="python-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/npm.png"
             
                alt="npm-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
            
                alt="git-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/console.png"
            
                alt="command-line-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/api.png"
               
                alt="api-icon"
              />
              
              <img src="https://img.icons8.com/color/48/000000/linux.png"
           
              alt="html-icon"
              />

              <img
                src="https://img.icons8.com/color/48/000000/data-configuration.png"
              
                alt="html-icon"
              />

              <img src="https://img.icons8.com/color/48/000000/wired-network.png"
            
              alt="aws-icon"
              />
              <img src="https://img.icons8.com/color/48/000000/docker-container.png"
              
              alt="aws-icon"
              />
         
        </div>

        <div className='h-header'>
        <h1>Articles</h1>
          <hr />
        </div>

        <div className='name-home'>
          
          <div className='h-card-section'>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/abetavarez/image/upload/v1606278870/IMG_1345_3_dxnsql.jpg"
                  title="instacart-project-website"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    What's the difference between JSON and BSON ?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  While working in projects specially with MongoDb I been as many times now about, what's BSON and how is it difference than JSON, which one is better or faster?
                  In this short but awesome article I wrote you'll find the answer to all these questions. 
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                  Published on Dev.to
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant='outlined'
                  href="https://dev.to/abetavarez/json-vs-bson-2f6b"
                  target="_blank"
                >
                  Go to Article
                </Button>
              </CardActions>
            </Card>
            </div>
        </div>

        <div className="h-header">
          <h1>RECENT PROJECTS</h1>
        <hr/>
        </div>
        

        <div className="">
          <div className="h-card-section">
            <hr />

            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606500088/Screen_Shot_2020-11-27_at_12.59.31_PM_xvfse4.png"
                title="content-type store"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  ESCLU
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Interact with Elastic Search Database from your favorite Terminal.
                  <Typography variant="body2" color="textPrimary" component="p">
                    Stack: JavaScript, NPM, Elastic Search.
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                  color="primary"
                  variant='outlined'
                href="https://github.com/AbeTavarez/ESCLU"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
          </div>
          <div className="h-card-section">
            <hr />

            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606279133/IMG_1346_2_ehte5p.jpg"
                title="content-type store"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
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
                href="https://github.com/AbeTavarez"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
          </div>




          <div className="h-card-section">
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/abetavarez/image/upload/v1606279384/IMG_1348_gmhkvo.jpg"
                title="influencercv"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
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
                href="http://influencercv.com/"
                target="_blank"
              >
                Visit site
              </Button>
              <Button
                size="small"
                  color="primary"
                  variant='outlined'
                href="https://github.com/AbeTavarez"
                target="_blank"
              >
                Visit Repo
              </Button>
            </CardActions>
          </Card>
          </div>
          
          <div className="h-card-section">
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

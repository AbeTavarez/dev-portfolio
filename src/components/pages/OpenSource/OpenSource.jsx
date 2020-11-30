import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Layout from '../../shared/Layout';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 1100,
    maxHeight: 800,
  },
  media: {
    height: 500,
  },
});

const OpenSource = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='fixed' className='os-container'>
       <div className="os-card-section">
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
    </Container>
  )
}

export default OpenSource

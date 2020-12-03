import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
import './OpenSource.css'

//* UseStyles
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 500,
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
});


const OpenSource = () => {
  const classes = useStyles()

  //* Tabs State
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
  setValue(newValue);
};

  


  return (
    <div maxWidth='fixed' className='os-container'>
      <div className='os-header'>
      <h1>
          Open Source Projects
      </h1>
      <hr/>
      </div>

      <div className="tabs-container">
      <Paper className={classes.root}>
        <Tabs value={value}
          indicartorColor='primary'
          textColor='primary'
          onChange={handleChange}
          centered
        >
          <Tab label='ESCLU' href='https://github.com/AbeTavarez/ESCLU' target='_blank'/>
        </Tabs>
      </Paper>
      </div>
      
       <div className="os-card-section">
            <Card className={classes.root}>
            <CardActionArea href="https://github.com/AbeTavarez/ESCLU" target='_blank'>
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
            </CardActions>
          </Card>
          </div>
    </div>
  )
}

export default OpenSource

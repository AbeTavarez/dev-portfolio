import React from "react";
import './YearCard.css'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";


const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 200,
    },
  });

export default function YearCard ({title, time, description1, description2, description3, imgUrl, btnUrl}) {
    const classes = useStyles();
    return (
      <div className="year-card">
        <div className="time">
          <img src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png" />
          <strong>{time}</strong>
        </div>

        <div className="time-line">
          <img src="https://img.icons8.com/ios/50/000000/vertical-line.png" />
        </div>

        <div className="details">
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
        </div>

        {imgUrl && btnUrl &&
        <div className="media-card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imgUrl}
              />

              <div className="visit-btn">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                href={btnUrl}
                target="_blank"
              >
                Visit site
              </Button>
              </div>
            </CardActionArea>
          </Card>
        </div>
        }
      </div>
    );
}
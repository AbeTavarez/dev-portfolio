import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Container col={8}>
          <div className="info-container">
            <h4 style={{ marginTop: "0px", textDecoration: "underline" }}>
              {this.props.schoolName}
            </h4>
            <p>
              {this.props.startYear} - {this.props.endYear}
            </p>
          </div>
          <p>{this.props.schoolDescription}</p>
        </Container>
      </Grid>
    );
  }
}

export default Education;

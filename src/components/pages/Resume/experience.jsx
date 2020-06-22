import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Container col={8}>
          <h4 style={{ marginTop: "0px", textDecoration: "underline" }}>
            {this.props.jobName}
          </h4>

          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>

          <p>{this.props.jobDescription}</p>
        </Container>
      </Grid>
    );
  }
}

export default Experience;

import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Container col={12}>
          <div style={{ display: "Flex" }}>
            {this.props.skill}
            {/* <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            /> */}
          </div>
        </Container>
      </Grid>
    );
  }
}

export default Skills;

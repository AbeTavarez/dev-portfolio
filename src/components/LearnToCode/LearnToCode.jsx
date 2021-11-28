import React from "react";
import { Container } from "@material-ui/core";
import "./LearnToCode.css";

const LearnToCode = () => {
  return (
    <Container maxWidth="lg" className="container">
      <h1>Learn To Code</h1>

      <Container maxWidth="md">
        <img src="https://logodix.com/logo/375072.jpg" />

        <h2>JavaScript</h2>

        <main>
          <p>Hey, welcome to my JavaScript Course!</p>
        </main>
      </Container>
    </Container>
  );
};

export default LearnToCode;

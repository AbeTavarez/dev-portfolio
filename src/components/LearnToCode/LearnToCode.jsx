import React from "react";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./LearnToCode.css";

const LearnToCode = () => {
  return (
    <Container maxWidth="lg" className="container">
      <h1>Learn To Code</h1>

      <Container maxWidth="md">
        <img src="https://logodix.com/logo/375072.jpg" />

        <h2>JavaScript</h2>

        <main>
          <p>
            Hey, welcome to my <span className="js">JavaScript</span> Course!
          </p>
          <p>
            In this course we're going to learn how to code using{" "}
            <span className="js">JavaScript</span>.
          </p>
          <p>
            <span className="js">JavaScript</span> is not only{" "}
            <span>the programming language of the web</span>, but <span className="js">JavaScript</span> can also be used to create web applications, mobile applications, and even desktop
            applications!
          </p>
          <p>Learning <span className="js">JavaScript</span> is an awesome choice that will bring joy to your life!</p>
        </main>

        <section>
            <Button variant="contained" color="secondary" size="large" href="/JavaScriptBeginners">Join Now!</Button>
        </section>
      </Container>
    </Container>
  );
};

export default LearnToCode;

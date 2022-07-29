import React, { Component } from "react";
import axios from "axios";

import "./Contact.css";

export default class Contact extends Component {
  state = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((res) => {
      res.data.status === "success"
        ? alert("Message send")
        : alert("Message failed to send");
    });
  };
  render() {
    return (
      <div className="email-form-container">
        <div className="email-form-top">
          <h1>Get in touch</h1>
          <img
            src="https://img.icons8.com/dusk/84/000000/paper-plane.png"
            alt="paper-plain-icon"
          />
        </div>

        <form onSubmit={this.handleSubmit} method="post">
          <div>
            <label>
              E-mail:
              <input type="text" name="email" required focused />
            </label>
          </div>

          <div>
            <label>
              Name:
              <input typer="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              Subject:
              <input typer="text" name="subject" required />
            </label>
          </div>
          <div>
            <label>
              Message:
              <textarea typer="text" name="message" rows="5" required />
            </label>
          </div>

          <div>
            <button type="submit" value="send">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

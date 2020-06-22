import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  FormControlLabel,
  FormLabel,
  TextField,
  Button,
} from "@material-ui/core";

import "./Contact.css";

export default class ContactForm2 extends React.Component {
  state = {
    email: "",
    name: "",
    subject: "",
  };
  render() {
    return (
      <div className="email-form-container">
        <div className="email-form-top">
          <h1>Get in touch</h1>
          <img src="https://img.icons8.com/dusk/84/000000/paper-plane.png" />
        </div>
        <form
          action="mailto:abetavarez@icloud.com"
          method="post"
          entype="text/plain"
          className="email-form-container"
        >
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              type="text"
              aria-describedby="my-helper-text"
              required="true"
              focused="true"
            />
            <FormHelperText id="my-helper-text">
              I'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              typer="text"
              aria-describedby="my-helper-text"
              required
            />
            <FormHelperText id="my-helper-text">Full name</FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Input
              id="subject"
              type="text"
              aria-describedby="my-helper-text"
              required
            />
            <FormHelperText id="my-helper-text">Subject</FormHelperText>
          </FormControl>

          <FormControl>
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              type="text"
              multiline
              rows={10}
              defaultValue="Write your message"
              variant="outlined"
              required
            />
          </FormControl>
          <Button type="submit" value="send">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

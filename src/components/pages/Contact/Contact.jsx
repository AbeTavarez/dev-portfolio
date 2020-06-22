import React from "react";

import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

export default function Contact() {
  return (
    <div>
      <h1>Get in touch</h1>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          I'll never share your email.
        </FormHelperText>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Full name</FormHelperText>

        {/* <InputLabel htmlFor="subject">Subject</InputLabel> */}
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Subject</FormHelperText>

        {/* <InputLabel htmlFor="message">Message</InputLabel> */}
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Your message</FormHelperText>
      </FormControl>
    </div>
  );
}

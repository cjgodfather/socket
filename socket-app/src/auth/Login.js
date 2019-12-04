import React, { useState, useEffect } from "react";

import { Button, ButtonGroup, Form, FormGroup, Label, Input } from "reactstrap";

const Login = props => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label className="mr-sm-2">Username:</Label>
        <Input type="text" name="username" placeholder="username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label className="mr-sm-2">Password:</Label>
        <Input type="password" name="password" placeholder="password" />
      </FormGroup>
      <ButtonGroup>
        <Button>Login with Github</Button>
        <Button>Login with Facebook</Button>
        <Button>Login with Twitter</Button>
      </ButtonGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;

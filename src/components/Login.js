import React from "react";

import myLogo from '../res/img/logo.png';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const Login = () => (
  <Grid textAlign="center" style={{ height: "80vh" }} >
    <Grid.Column style={{ maxWidth: 450 }}>
    <Image src={myLogo} verticalAlign="middle"/> 
      <Header as="h2" color="teal" textAlign="center">
        Log-in to your account
      </Header>
      <Form size="large">
        <Segment stacked>
        <Form.Input
            fluid
            required
            icon="user"
            iconPosition="left"
            placeholder="email@creospan.com"
            pattern="[A-Za-z0-9._%+-]+@[creospan]+\.[com]{1,63}$"
            type="email"
          />
          <Form.Input
            fluid
            required
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Forgot Password? <a href="/resetpassword">Reset Your Password</a>
      </Message>
      <Message>
        New to us? <a href="/signup">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Login;

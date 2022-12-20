import React from "react";

import myLogo from '../res/img/logo.png';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

const ResetPassword = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} >
    <Grid.Column style={{ maxWidth: 450 }}>
    <Image src={myLogo} verticalAlign="middle"/> 
      <Header as="h2" color="teal" textAlign="center">
       Reset Your Password
      </Header>
      <Form size="large">
        <Segment stacked>

        <Form.Input
            id='email'
            fluid
            required
            icon="user"
            iconPosition="left"
            placeholder="email@creospan.com"
            pattern="[A-Za-z0-9._%+-]+@[creospan]+\.[com]{1,63}$"
            type="email"
          />

          <Button color="teal" fluid size="large">
            Send Reset Email
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default ResetPassword;

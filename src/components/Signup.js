import axios from 'axios';
import myLogo from '../res/img/logo.png';
import React from 'react';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";


  class Signup extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        phone: '',
      }
    }

    handleFormSubmit = (props) => {
      const data = { 
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
      }


      axios.post('http://localhost:8080/api/kudos/users', data)
      .then(data => {
          console.log('Success:', data);
          window.location = "/login"
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    }
  
    handleFirstNameChange = (e) => {
      this.setState({
        firstName: e.target.value,
      });
    }
    handleLastNameChange = (e) => {
      this.setState({
        lastName: e.target.value,
      });
    }

    handleuserNameChange = (e) => {
      this.setState({
        userName: e.target.value,
      });
    }

    handleemailChange = (e) => {
      this.setState({
        email: e.target.value,
      });
    }
    
    handlepasswordChange = (e) => {
      this.setState({
        password: e.target.value,
      });
    }

    handlephoneChange = (e) => {
      this.setState({
        phone: e.target.value,
      });
    }



render() {
  return (
    <Grid textAlign="center" style={{ height: "80vh" }} >
    <Grid.Column style={{ maxWidth: 450 }}>
    <Image src={myLogo} verticalAlign="middle"/> 
      <Header as="h2" color="teal" textAlign="center">
       Sign Up to your account
      </Header>
      <Form size="large" onSubmit={this.handleFormSubmit}>
        <Segment stacked>
          <Form.Input
            id='firstName'
            fluid
            required
            icon="address book outline"
            iconPosition="left"
            placeholder="First Name"
            type="text"
            value={this.state.firstName} 
            onChange={this.handleFirstNameChange}
          />
          <Form.Input
            id='lastName'
            fluid
            required
            icon="address book outline"
            iconPosition="left"
            placeholder="Last Name"
            type="text"
            value={this.state.lastName} 
            onChange={this.handleLastNameChange}
          />

          <Form.Input
            id='userName'
            fluid
            required
            icon="clone"
            iconPosition="left"
            placeholder="Username"
            type="text"
            value={this.state.userName} 
            onChange={this.handleuserNameChange}
          />

          <Form.Input
            id='email'
            fluid
            required
            icon="user"
            iconPosition="left"
            placeholder="email@creospan.com"
            pattern="[A-Za-z0-9._%+-]+@[creospan]+\.[com]{1,255}$"
            type="email"
            value={this.state.email} 
            onChange={this.handleemailChange}
          />
          <Form.Input
            id='password'
            fluid
            required
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            value={this.state.password} 
            onChange={this.handlepasswordChange}
          />
          <Form.Input
            id='phone'
            fluid
            required
            icon="phone square"
            iconPosition="left"
            placeholder="Phone"
            type="number"
            value={this.state.phone} 
            onChange={this.handlephoneChange}
          />

          <Button   color="teal" fluid size="large">
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}
}

export default Signup;

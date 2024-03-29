import React from "react";
import {Link} from 'react-router-dom';

import myLogo from '../res/img/logo.png';


import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
   

const Layout = (props) => (
  
  
  <div>   
    <Menu inverted>
      <Container>
        <Menu.Item as="a" header>
          CreoKudos
        </Menu.Item>
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/allusers">All Users</Link></Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item><Link to="/login">Login</Link></Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>

    {props.children}

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 1" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 2" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Group 3" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Footer Header" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni
      laborum fugit beatae quaerat alias ipsa accusamus, ipsam nostrum quam
      dignissimos nesciunt, cum sequi consequuntur accusantium reprehenderit
      temporibus cumque. Aspernatur.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered  src={myLogo}/>
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default Layout;

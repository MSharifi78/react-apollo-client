import React, { Component } from "react";
import {
  Grid,
  Header,
  Image,
  Form,
  Segment,
  Button,
  Message
} from "semantic-ui-react";

export class Login extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%", backgroundColor: "#fafafa" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            Login to Your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button color="orange" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

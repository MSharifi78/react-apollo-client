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
import Formsy from "formsy-react";
import CustomFormInput from "../../components/CustomFormInput";

export class Login extends Component {
  render() {
    return (
      <Grid
        style={{ height: "100%", backgroundColor: "#fafafa" }}
        verticalAlign="middle"
        centered
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            Login to Your account
          </Header>
          <Formsy>
            <Segment stacked>
              <CustomFormInput
                placeholder="Email"
                icon="mail"
                name="email"
                validations="isEmail"
                validationError="This is not an Email"
              />
              <CustomFormInput
                placeholder="Password"
                icon="lock"
                name="password"
                type="password"
              />
              <Button color="orange" fluid size="large">
                Login
              </Button>
            </Segment>
          </Formsy>
          <Message>
            New to us? <a href="#">Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

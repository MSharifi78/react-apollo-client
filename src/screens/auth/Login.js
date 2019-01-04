import React, { Component } from "react";
import {
  Grid,
  Header,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import Formsy from "formsy-react";
import CustomFormInput from "../../components/CustomFormInput";
import {Mutation} from "react-apollo"
import {login} from "../../apollo/ClientApi"


export class Login extends Component {
  onLogin= (data)=>{
    if(data.login.token){
      localStorage.setItem("apolloToken",data.login.token)
      this.props.history.push("/")
    }
  }
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
          <Mutation mutation={login} onCompleted={this.onLogin}>
          {(login,{loading,data})=>{
            return (
          <Formsy onValidSubmit={(model)=>{
              login({
                variables: {
                  email: model.email,
                  password: model.password
                }
              })
          }} disabled = {loading}>
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
    )}}
          </Mutation>
          <Message>
            New to us? <a href="#">Register</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

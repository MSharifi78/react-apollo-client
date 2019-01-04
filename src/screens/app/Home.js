import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

export class Home extends Component {
  render() {
    return (
      <Grid
        style={{ height: "100%", backgroundColor: "#fafafa" }}
        verticalAlign="middle"
        centered
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="orange" textAlign="center">
            YOU DONE IT!!!
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;

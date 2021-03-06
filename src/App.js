import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/app/Home";
import PrivateRoute from "./components/PrivateRoute";
import {ApolloProvider} from "react-apollo"
import client from './apollo/client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/" component={Home} redirectPath="/login" />
        </Switch>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;

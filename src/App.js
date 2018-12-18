import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/app/Home";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/" component={Home} redirectPath="/login" />
      </Router>
    );
  }
}

export default App;

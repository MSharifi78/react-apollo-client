import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ component: Component, redirectPath, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

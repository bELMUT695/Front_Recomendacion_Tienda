import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootStore } from "../../store/store";

export const ProtectedRoute = (props) => {
  const urlPath = window.location.pathname;
  const sizePath = urlPath.split("/").length;
  if (sizePath === 7) {
    localStorage.setItem("path", urlPath);
  }
  return (
    <Fragment>
      {user ? (
        <Route
          path={props.path}
          component={props.component}
          exact={props.exact}
        />
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
};

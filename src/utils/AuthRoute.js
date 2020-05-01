import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX STUFF
import { connect } from "react-redux";

const AuthRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !auth ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.user.auth,
});

AuthRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AuthRoute);

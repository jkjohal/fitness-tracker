import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <h1>You have successfully logged out.</h1>
      </div>
    );
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default connect(null, { logoutUser })(Logout);

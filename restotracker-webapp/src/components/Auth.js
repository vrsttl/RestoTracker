import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { restoreUserByToken } from '../actions/actions';

export function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    UNSAFE_componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user.isAuthenticated) {
        // RESTORE USER
        const token = localStorage.getItem('token');
        const { location } = this.props;
        const next = location.pathname + location.search;

        if (token) {
          this.props.restoreUserByToken(next);
        } else {
          this.props.history.push(`/login?redirect=${next}`);
        }
      }
    }

    render() {
      return this.props.user.isAuthenticated
        ? <Component {...this.props} />
        : null;
    }
  }

  AuthenticatedComponent.propTypes = {
    user: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    restoreUserByToken: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
  };

  const mapActionCreators = {
    restoreUserByToken,
  };

  const mapStateToProps = state => ({
    user: state.user,
  });

  return withRouter(connect(mapStateToProps, mapActionCreators)(AuthenticatedComponent));
}

export default requireAuth;

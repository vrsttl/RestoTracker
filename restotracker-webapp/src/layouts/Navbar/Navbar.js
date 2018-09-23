import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'actions/actions';


const Navbar = (props) => {
  const activeStyle = { color: 'blue' };

  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      {' | '}
      {
        props.isAuthenticated
          ? <button onClick={props.logout}>Logout</button>
          : <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>
      }
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    isAuthenticated: store.user.isAuthenticated,
  };
}

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

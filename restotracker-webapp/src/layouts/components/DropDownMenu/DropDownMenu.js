import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import { logout } from 'actions/actions';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

class DropDownMenu extends Component {
  handleLogOut = () => {
    this.props.logout();
  }

  menu = (
    <Menu >
      <Menu.Item key="profile"><Icon type="profile" />Profile</Menu.Item>
      <Menu.Item key="settings"><Icon type="setting" />Settings</Menu.Item>
      <Menu.Item key="logout" onClick={this.handleLogOut}><Icon type="logout" />Log out</Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Dropdown overlay={this.menu} trigger={['click']}>
        <div className="user">
          <FontAwesomeIcon icon="user" id="user" />
        </div>
      </Dropdown>
    );
  }
}

const mapActionCreators = {
  logout,
};

DropDownMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapActionCreators)(DropDownMenu));

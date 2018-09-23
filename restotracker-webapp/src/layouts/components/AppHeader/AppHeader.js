import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faTh, faUser, fas } from '@fortawesome/free-solid-svg-icons';
import { updateDrawer } from '../../../actions/actions';
import { connect } from 'react-redux';
import './app-header.scss';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import PageSelectorMenu from '../PageSelectorMenu/PageSelectorMenu';

library.add(faBell, faBars, faTh, faUser, fas);

class AppHeader extends Component {
  handleClick = () => {
    this.props.updateDrawer(true);
  }

  render() {
    return (
      <div className="page-header-container">
        <div className="nav-container">
          <div className="bar-left">
            <FontAwesomeIcon icon="bars" id="bar" onClick={this.handleClick} />
          </div>
          <div className="bar-right">
            <FontAwesomeIcon icon="bell" id="bell" />
            <PageSelectorMenu />
            <FontAwesomeIcon icon="question-circle" id="question" />
            <DropDownMenu />
          </div>
        </div>
        <div className="page-title">
          <p>{this.props.headerText}</p>
        </div>
        <div className="workspace-subtitle">
          <span>{this.props.headerSubtitle}</span>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  headerSubtitle: PropTypes.string,
  updateDrawer: PropTypes.func.isRequired,
};

AppHeader.defaultProps = {
  headerSubtitle: '',
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  updateDrawer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);

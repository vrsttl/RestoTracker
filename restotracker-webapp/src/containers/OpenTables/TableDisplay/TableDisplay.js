import React, { Component } from 'react';
import { Switch, Menu, Dropdown, Badge } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
// import { changeDefaultWorkspace } from '../../../actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './TableDisplay.scss';

library.add(faEllipsisH);

class WorkspaceCard extends Component {
  onChange = () => {
    // this.props.changeDefaultWorkspace(this.props._id);
  }

  handleClick = () => {
    this.props.history.push(`workspaces/${this.props._id}`);
  }

  render() {
    return (
      <div className="card">
        <div className="card-top">
          <div>
            {this.props.default ?
              <div>
                <Switch checked />
                <span className="info state">Default workspace</span>
              </div>
              :
              <div>
                <Switch checked={false} onChange={this.onChange} />
                <span className="info state">Set to default</span>
              </div>}
          </div>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="0">
                  <p>What is coming here??</p>
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <FontAwesomeIcon icon="ellipsis-h" className="ant-dropdown-link" href="#" />
          </Dropdown>
        </div>
        <div className="titleLetter">
          <button className="titleLetter" onClick={this.handleClick}>
            {this.props.title.charAt(0)}
          </button>
        </div>
        <div className="title">
          {this.props.title}
        </div>
        <div className="card-bot">
          <div>
            <Badge count={20} style={{ backgroundColor: '#2ECC71' }} className="left" />
            <div className="info new">new response</div>
          </div>
          <div>
            <Badge count={123} overflowCount={999} style={{ backgroundColor: '#3498DB' }} />
            <div className="info right">in progress</div>
          </div>
        </div>
      </div>
    );
  }
}

WorkspaceCard.propTypes = {
  title: PropTypes.string.isRequired,
  default: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
  changeDefaultWorkspace: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  // changeDefaultWorkspace,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkspaceCard));

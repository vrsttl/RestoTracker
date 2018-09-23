import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom';
import { setCurrentComponent } from '../../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../../store/configureStore';

library.add(faTh);


class PageSelectorMenu extends Component {
  handleComponentSet = (comp) => {
    this.props.setCurrentComponent(comp);
  }

  handleMenuSelect = (item) => {
    switch (item.key) {
      case 'open':
        history.push('/open');
        this.handleComponentSet('Open');
        break;

      case 'closed':
        history.push('/closed');
        this.handleComponentSet('Closed');
        break;

      case 'summary':
        history.push('/summary');
        this.handleComponentSet('Summary');
        break;

      default:
    }
  }

  menu = (
    <Menu onClick={this.handleMenuSelect}>
      <Menu.Item key="open">Open Tables</Menu.Item>
      <Menu.Item key="closed">Closed Tables</Menu.Item>
      <Menu.Item key="summary">Summary</Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Dropdown overlay={this.menu} trigger={['click']}>
        <FontAwesomeIcon icon="th" id="th" />
      </Dropdown>
    );
  }
}

function mapStateToProps(store) {
  return {
    currentComponent: store.componentChange.component,
  };
}

const mapDispatchToProps = {
  setCurrentComponent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(PageSelectorMenu));


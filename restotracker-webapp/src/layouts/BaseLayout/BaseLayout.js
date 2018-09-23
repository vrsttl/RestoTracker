import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Drawer } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleLeft, faInbox, faStar, faFolderOpen, faChevronCircleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { history } from '../../store/configureStore';
import { updateDrawer } from '../../actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MenuItem from './MenuItem';
import ContentLayout from './ContentLayout';
import './BaseLayout.scss';
import './BaseLayout.less';

const { Sider } = Layout;

library.add(faChevronCircleLeft, faInbox, faStar, faFolderOpen, faChevronCircleRight, faHome);

class BaseLayout extends Component {
  state = {
    drawerVisible: null,
    collapsed: false,
    width: window.innerWidth,
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('load', this.screenSizeOnloadHandler);
    window.addEventListener('resize', this.screenSizeResizeHandler);
  }

  componentDidMount() {
    this.screenSizeOnloadHandler();
    this.screenSizeResizeHandler();
  }

  componentWillUnmount() {
    window.addEventListener('load', this.screenSizeOnloadHandler);
    window.addEventListener('resize', this.screenSizeResizeHandler);
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  onClose = () => {
    this.props.updateDrawer(false);
  }

  handleMenuSelect = (item) => {
    switch (item.key) {
      case 'home':
        history.push('/home');
        break;
      default:
    }
  }

  screenSizeOnloadHandler = () => {
    this.setState({ width: window.innerWidth });
    if (this.state.width <= 576) {
      this.setState({ drawerVisible: false, collapsed: false });
    } else if (this.state.width > 576 && this.state.width < 1200) {
      this.setState({ drawerVisible: true, collapsed: true });
    } else if (this.state.width >= 1200) {
      this.setState({ drawerVisible: true, collapsed: false });
    }
  }

  screenSizeResizeHandler = () => {
    this.setState({ width: window.innerWidth });
    if (this.state.width <= 576) {
      this.setState({ drawerVisible: false });
    } else if (this.state.width > 576 && this.state.width < 1200) {
      this.setState({ drawerVisible: true });
    } else if (this.state.width >= 1200) {
      this.setState({ drawerVisible: true });
    }
  }

  render() {
    const { collapsed } = this.state;
    if (this.state.drawerVisible) {
      return (
        <div>
          <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
            <div className="ant-sider-layout-container">
              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={this.onCollapse}
              >
                <Menu theme="light" onSelect={this.handleMenuSelect}>
                  <Menu.Item key="home" className="homeButton" >
                    <MenuItem icon="home" content="Table Map" />
                  </Menu.Item>
                </Menu>
                <button className="ovalButton" style={collapsed ? { left: '50px' } : { left: 'calc(50% - 30px)' }}>+</button>
              </Sider>
            </div>
            <div
              className="ant-content-layout-container"
              style={collapsed ? { left: '80px', width: 'calc(100% - 80px)' } : { left: '200px', width: 'calc(100% - 200px)' }}
            >
              <ContentLayout headerText={this.props.headerText}>
                {this.props.children}
              </ContentLayout>
            </div>
          </Layout>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Drawer
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.props.drawerState}
          >
            <Menu theme="light" onSelect={this.handleMenuSelect}>
              <Menu.Item key="home" className="homeButton" >
                <MenuItem icon="home" content="Table Map" />
              </Menu.Item>
            </Menu>
            <button className="ovalButton" style={{ left: 'calc(50% - 30px)' }}>+</button>
          </Drawer>
        </div>
        <ContentLayout headerText={this.props.headerText}>
          {this.props.children}
        </ContentLayout>
      </div>
    );
  }
}

BaseLayout.propTypes = {
  headerText: PropTypes.string,
  children: PropTypes.element,
  updateDrawer: PropTypes.func.isRequired,
  drawerState: PropTypes.bool.isRequired,
};

BaseLayout.defaultProps = {
  children: React.createElement('div'),
  headerText: 'Loading page...',
};

function mapStateToProps(store) {
  return {
    drawerState: store.updateDrawer.value,
  };
}

const mapDispatchToProps = {
  updateDrawer,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseLayout));

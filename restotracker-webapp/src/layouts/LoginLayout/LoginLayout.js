import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './login-layout.scss';

const { Content } = Layout;

const LoginLayout = props => (
  <Layout>
    <Content className="login-layout">
      {props.children}
    </Content>
  </Layout>
);

LoginLayout.propTypes = {
  children: PropTypes.element,
};

LoginLayout.defaultProps = {
  children: [],
};

export default LoginLayout;

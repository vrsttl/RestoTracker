import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Layout } from 'antd';
import AppHeader from '../../layouts/components/AppHeader/AppHeader';
import './opentables-layout.scss';

const { Content, Footer } = Layout;

const OpenTables = ({ children }) => (
  <Layout className="opentables-layout">
    <AppHeader
      headerText="Our Tables"
      headerSubtitle="You can see a list of our tables here."
    />
    <Content>
      {children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
        RestoTracker ©{moment().format('YYYY')}
    </Footer>
  </Layout>
);

OpenTables.propTypes = {
  children: PropTypes.element,
};

OpenTables.defaultProps = {
  children: null,
};

export default OpenTables;

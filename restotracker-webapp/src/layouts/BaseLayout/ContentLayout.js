import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader/AppHeader';

const { Content, Footer } = Layout;

const ContentLayout = ({ headerText, children }) => (
  <Layout>
    <AppHeader headerText={headerText} />
    <Content>
      {children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      RestoTracker ©{moment().format('YYYY')}
    </Footer>
  </Layout>
);

ContentLayout.propTypes = {
  headerText: PropTypes.string.isRequired,
  children: PropTypes.element,
};

ContentLayout.defaultProps = {
  children: null,
};

export default ContentLayout;

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({ icon, content }) => (
  <div>
    <FontAwesomeIcon icon={icon} style={{ fontSize: '20px', color: '#929292' }} />
    <Icon />
    <span> {content}</span>
  </div>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MenuItem;

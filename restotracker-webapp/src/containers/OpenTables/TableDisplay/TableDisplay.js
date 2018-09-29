import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './TableDisplay.scss';

library.add(faEllipsisH);

class TableDisplay extends Component {
  onChange = () => {
  }

  handleClick = () => {
    this.props.history.push(`tables/${this.props.name.substring(this.props.name.length - 1)}`);
  }

  render() {
    const { name, toPay } = this.props;
    return (
      <div className="card">
        <div >
          <h1 className="card-top">{name}</h1>
          <button className="sum" onClick={this.handleClick}>
            {toPay}
          </button>
        </div>
      </div>
    );
  }
}

TableDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  toPay: PropTypes.number.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableDisplay));

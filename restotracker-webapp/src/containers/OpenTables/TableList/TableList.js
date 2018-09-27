import React, { Component } from 'react';
import TableDisplay from '../../../containers/OpenTables/TableDisplay/TableDisplay';
import { getTables } from '../../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../TableDisplay/TableDisplay.scss';

class TableList extends Component {
  componentDidMount() {
    this.props.getTables();
  }

  render() {
    return (
      <div className="card-set">
        {
          this.props.tables !== []
          && (this.props.tables.map(element =>
            (<TableDisplay
              key={element._id}
              id={element.id}
              title={element.title}
              default={element.default}
              typeformId={element.typeformId}
            />),
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    workspaces: store.workspaces.data,
  };
}

const mapDispatchToProps = {
  getTables,
};

TableList.propTypes = {
  getTables: PropTypes.func.isRequired,
  tables: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableList);

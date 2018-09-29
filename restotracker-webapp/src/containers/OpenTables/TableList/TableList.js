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
          this.props.tables.map(table =>
            (<TableDisplay
              key={table._id}
              name={table.name}
              toPay={table.currentconsumption}
            />),
          )
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    tables: store.getTables.tables,
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

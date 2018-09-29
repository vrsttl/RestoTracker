import React, { Component } from 'react';
import { Table } from 'antd';
import OpenTables from '../layouts/OpenTablesLayout/OpenTablesLayout';

export function asyncComponent(importComponent, componentName) {
  class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }

    render() {
      const PatientComponent = this.state.component;
      return PatientComponent
        ? <PatientComponent
          componentName={componentName
            ? componentName
            : 'noParentLogic'}
          {...this.props}
        />
        : <OpenTables loading={true}><Table /></OpenTables>;
    }
  }
  return AsyncComponent;
}

export default asyncComponent;
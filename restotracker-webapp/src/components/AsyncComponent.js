import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import { Table } from 'antd';

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
        : <BaseLayout><Table /></BaseLayout>;
    }
  }
  return AsyncComponent;
}

export default asyncComponent;
import React, { Component, PropTypes } from 'react';
import Application from './application';

export default class ApplicationContainer extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    };
  }

  render() {
    return (
      <Application>
        {this.props.children}
      </Application>
    );
  }
}

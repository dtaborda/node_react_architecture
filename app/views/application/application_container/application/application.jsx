import React, { Component, PropTypes } from 'react';


export default class Application extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class UpdateComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.status !== this.props.status || nextProps.accounts !== this.props.accounts;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
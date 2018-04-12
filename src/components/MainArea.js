import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MainArea extends PureComponent {
  static propTypes = {
  };
  static EMPTY_STR = '';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
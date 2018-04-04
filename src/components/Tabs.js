import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/VisibilityFilters';


let stylesForContainer = {
  display: 'flex',
  position: 'absolute',
  bottom: 0
}

let stylesForElement = {
  
}

export default class Tabs extends PureComponent {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(filter) {
    this.props.onFilterChange(filter);
  }

  renderFilter(filter, name) {
    if (this.props.filter === filter) {
      return name;
    }

    return (
      <a
        href={"#"}
        onClick={() => this.onClick(filter)}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <div style={stylesForContainer}>
        <div style={stylesForElement}>Home</div>
        <div style={stylesForElement}>Tab</div>
        <div style={stylesForElement}>Me</div>
      </div>
    );
  }
}

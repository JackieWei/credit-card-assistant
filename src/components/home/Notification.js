import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    dueDate: PropTypes.func.isRequired,
    createDate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onActions = this.onActions.bind(this);
  }

  onActions() {
    return this.props.onClick(this.props.id);
  }

  render() {
    return (
      <li>
        I am a notification!
      </li>
    );
  }
}

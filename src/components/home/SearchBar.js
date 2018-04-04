import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends PureComponent {
  static propTypes = {
    onInputDone: PropTypes.func.isRequired,
  };
  static EMPTY_STR = '';

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.input) {
      const keyword = this.input.value.trim();
      this.props.onInputDone(keyword).then(() => {
        this.input.value = EMPTY_STR;
      }, (error) => {
        alert(error.toString());
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type={'search'}
          ref={(me) => {
            if (me) {
              this.input = me;
            }
          }}
        />
      </div>
    );
  }
}

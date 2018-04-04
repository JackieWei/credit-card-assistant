import React, { PropTypes, PureComponent } from 'react';

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
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import AppContainer from '../containers/AppContainer';

export default class Root extends PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <AppContainer />
      </Provider>
    );
  }
}

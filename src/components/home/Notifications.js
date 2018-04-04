import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default class Notifications extends PureComponent {
  static propTypes = {
    todos: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo =>
            <Notification
              id={todo.get('id')}
              type={todo.get('type')}
              status={todo.get('status')}
              dueDate={todo.get('dueDate')}
              createDate={todo.get('createDate')}
            />
          )
        }
      </ul>
    );
  }
}
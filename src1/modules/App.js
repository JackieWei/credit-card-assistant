import React from 'react'
import NavLink from './NavLink'
import Tab from './app/Tab';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Credit Card Management</h1>
        {this.props.children}
        <ul role="nav">
          <Tab tabName="Home" />
          <Tab tabName="Card" />
          <Tab tabName="Me" />
        </ul>
      </div>
    )
  }
}
export default App

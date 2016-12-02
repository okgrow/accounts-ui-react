import React, { Component } from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <LoginButtons />
        </ul>
      </div>
    );
  }
}

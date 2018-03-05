import React, { PureComponent } from 'react';
import './App.css';
import TodoAppContainer from './containers/TodoContainer'

class App extends PureComponent {
  

  render() {

    return (
      <TodoAppContainer/>
    );
  }
}

export default App;

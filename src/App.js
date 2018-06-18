import React, { Component } from 'react';
import TodoItem from './components/todos/todo-item';
//import Counter from './components/todos/counter';
import TodoLists from './components/todos/todo-list';
import EmpList from  './components/employees/emp-list';

class App extends Component {
  render() {
    return (
      <div >
        <h1>React Training</h1>
        

        {/*<Counter initialCount={867}
        />
        <TodoLists />*/}
        <EmpList />
      </div>
    );
  }
}

export default App;

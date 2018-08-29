import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
          {
            //템플릿 완성!! 신기하네 -_-
          }
          <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;

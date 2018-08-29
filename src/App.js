import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id=3
  state={
    input: '',
    todos:[
      {id:0, text:'리액트 소개0', checked: false},
      {id:1, text:'리액트 소개1', checked: false},
      {id:2, text:'리액트 소개2', checked: false},
    ]
  }

  handleChange = (e) => {
    // 아.. 여기서 setState를 하지 않으면 render() 함수 호출을 안하는구나.
    // 부모 컴포넌트가 리렌더링 되면, 자식 컴포넌트들도 렌더링이 되고.. 
    // 그래서 필요할때만 렌더링시키는 최적화가 필요하군.
    //console.log("form on chage but not set state")
    
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
    
  }

  handleKeyPress = (e) => {
    //console.log(e);
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  };

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '', // 인풋은 비우고
      // concat으로 배열에 추가. 
      // 리액트 state의 배열은 push로 추가하면 안된다.
      /*
        let arrayOne = [];
        let arrayTwo = arrayOne;
        arrayOne.push(1);
        console.log(arrayOne === arrayTwo); // true

        push 를 통하여 데이터를 추가하면 배열에 값이 추가되긴 하지만 
        가르키고 있는 배열은 똑같기 때문에 비교를 할 수 없습니다. 
        나중에 최적화를 하게 될 때, 배열을 비교하여 리렌더링을 방지를 하게 되는데요, 
        만약에 push 를 사용한다면 최적화를 할 수 없게 됩니다.

        반면, concat 의 경우엔 새 배열을 만들기 때문에 괜찮습니다.

        .. 라고 한다.
      */
      todos: todos.concat({id: this.id++, text: input, checked: false})
    });
  };

  // 클릭시 체크 표시/해제
  // 모든 todo item이 사용하는 함수이므로 여기에 하나만 만들고 props로 던져준다..
  handleToggle = (id) => {
    const {todos} = this.state;

    // 파라미터로 받은 id로 몇번째 아이템인지 찾음
    const index = todos.findIndex(todo => todo.id === id);

    // 배열 값 수정할때도, 직접 수정하면 안되고 업데이트할 배열이나 객체를 복사해서 수정해줘야함.
    const selected = todos[index];
    const nextTodos = [...todos]; // 배열을 복사

    // 여기 점 세개는 전개연산자라는 놈이다.
    // var parts = ['shoulders', 'knees'];
    // var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]

    // 기존 값들을 복사하고, checked 값을 덮어쓴다
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  // 아이템 삭제는 직접 해보자
  handleRemove = (id) => {
    /*
    직접 짠건데.. 멍청아! 굳이 이럴 필요가 없다!
    const {todos} = this.state;

    // 파라미터로 받은 id로 몇번째 아이템인지 찾음
    const index = todos.findIndex(todo => todo.id === id);

    // 배열 값 수정할때도, 직접 수정하면 안되고 업데이트할 배열이나 객체를 복사해서 수정해줘야함.
    const nextTodos = [...todos]; // 배열을 복사
    nextTodos.splice(index,1); // 해당인덱스에서 하나의 항목을 삭제!
    this.setState({
      todos: nextTodos
    });
    */

    // 대신 필터 함수를 사용하자.
    // 함수형 프로그래밍에 취한다... 캬... -_-
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });

  }

  render() {
    // 객체 비구조화. 자바스크립트 별게 다 생겼구나 ㅠㅠ
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    /*
    var o = {p: 42, q: true};
    var {p, q} = o;

    console.log(p); // 42
    console.log(q); // true
    */
   //console.log(this);
    const {input, todos} = this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    // this.handle.. 이런식으로 안써줘도 되니 참 편하지요? 

    return (
      <TodoListTemplate form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }>
          {
            //템플릿 완성!! 신기하네 -_-
          }
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;

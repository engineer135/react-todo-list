import React, { Component } from 'react';
import TodoItem from './TodoItem';

// 리스트는 함수형이 아닌 클래스형 컴포넌트로 작성하자.
// 그래야 나중에 성능 최적화가 가능
class TodoItemList extends Component {
    render(){
        const { todos, onToggle, onRemove } = this.props;

        return(
            <div>
                <TodoItem text="헬로"/>
                <TodoItem text="리액트"/>
                <TodoItem text="방가방가"/>
            </div>
        );
    }
}

export default TodoItemList;
import React, { Component } from 'react';
import TodoItem from './TodoItem';

// 리스트는 함수형이 아닌 클래스형 컴포넌트로 작성하자.
// 그래야 나중에 성능 최적화가 가능
class TodoItemList extends Component {
    render(){
        const { todos, onToggle, onRemove } = this.props;

        // props로 넘어온 todos 배열을, 맵함수로 todoList 생성..
        // 배열인데 {todos} 이렇게 사용하면 에러가 난다. 컴포넌트 배열로 변환해줘야함!
        const todoList = todos.map(
            ({id, text, checked})=>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;
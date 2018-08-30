import React, { Component } from 'react';
import TodoItem from './TodoItem';

// 리스트는 함수형이 아닌 클래스형 컴포넌트로 작성하자.
// 그래야 나중에 성능 최적화가 가능
class TodoItemList extends Component {
    // 최적화
    // 현재는 키 입력시마다 렌더 함수를 호출한다. 
    // 렌더 함수 호출되도, dom에 변화는 없지만, 가상 dom에 렌더링하는 자원이 미세하게 낭비되고 있는 것!
    // 이걸 막으려면, 컴포넌트 라이프 사이클 메소드 중 아래 메소드를 수정해줘야한다.
    shouldComponentUpdate(nextProps, nextState) {
        // todos 값이 다른 경우에만 true 리턴!
        //console.log("shouldComponentUpdate");
        //console.log(this.props.todos);
        //console.log(nextProps.todos);
        return this.props.todos !== nextProps.todos;
    }
    
    render(){
        const { todos, onToggle, onRemove } = this.props;

        // props로 넘어온 todos 배열을, 맵함수로 todoList 생성..
        // 배열인데 {todos} 이렇게 사용하면 에러가 난다. 컴포넌트 배열로 변환해줘야함!
        const todoList = todos.map(
            ({id, text, checked, color})=>(
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    color={color}
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
import React from 'react';
import './TodoListTemplate.css';

// 이건 함수형 컴포넌트라고 부름. 파라미터로 props를 받는데 비구조화 할당하여 이런 형태로 작성한다. 신기 -_-
// 이렇게 안하면, 컴포넌트를 따로 만들어 
// <TodoListWrapper><Form/><TodoList/></TodoListWrapper>
// 이런방식으로 해야한다. 
// form 이란 이름의 prop으로 넘겨주면 됨. children은 알아서 하위노드에 있는 걸로 가져오네 신기하다 -_-
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일~
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>

        </main>
    );
};

export default TodoListTemplate;
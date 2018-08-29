import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        // 리스트 최적화 했던 것처럼 아이템도 최적화 가능
        // 삭제나 체크/해제시, 새 todo 입력시 하나의 TodoItem 컴포넌트만 업데이트하면 되잖아? 
        // 그러므로 이것도 최적화 가능..
        // 삭제할땐 아예 아이템 자체가 사라지므로 여기까지 타지도 않음..
        //console.log("item shouldComponentUpdate");
        //console.log(this.props.checked);
        //console.log(nextProps.checked);
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;

        //console.log("item render");
        //console.log(id);        

        return(
            // 아이디를 파라미터로 넘겨줄때 onClick={onToggle{id}} 로 하면 절대 안됨.
            // 이렇게 하면 해당 함수가 렌더링 될때 호출되서 무한 반복.
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //onToggle 실행 안되도록 막음. 이벤트 확산을 막는것.
                    onRemove(id);
                }}>
                    &times;
                </div>
                {
                    // checked 값에 따라 className에 checked라는 문자열을 넣어준다.
                    // (JavaScript logical && operator 이걸 사용한거구나.. 생소하다.)
                    // 아래는 "todo-text " + checked && 'checked'와 동일하지만
                    // checked 값이 false 일때는 todo-text false 와 같은 결과값이 나타난다.
                    // 이것까지 고쳐준다면
                    // `todo-text ${ checked ? ' checked' : '' }` 이렇게 작성해주면 됨.
                    // 동적인 클래스 쓰고 싶으면, classnames라는 모듈을 사용하면 더 간단히 됨.
                }
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );

    }
}

export default TodoItem;
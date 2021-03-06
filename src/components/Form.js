import React from 'react';
import './Form.css';

const Form = ({value, onChange, onKeyPress, onCreate, color}) => {
    const styles = {
        color : color
    };

    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={styles}/>
            <div className="create-button" onClick={onCreate}>
                추가!
            </div>
        </div>
    );
};

export default Form;
import React, {Component} from 'react';
import './Palette.css';

class Palette extends Component {
    render(){
        const {colors, onColorSelect, selectedColor} = this.props;

        // colors 배열을 컴포넌트 배열로 변환
        const colorList = colors.map(
            (color, index)=>
            {
                //console.log(color);
                let style = {
                    backgroundColor : color
                };
                return <div className={`color ${color === selectedColor ? 'active' : ''}`} key={index} style={style} onClick={() => onColorSelect(index)}/>
            }
        );

        //console.log(colorList);

        return(
            <div className="palette">
                {colorList}
            </div>
        )
    }
}

export default Palette;
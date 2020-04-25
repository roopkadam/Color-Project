import React, { Component } from 'react'
import './colorBox.css'

class ColorBox extends Component {
    render() {
        const {name, background} = this.props;
        console.log('colorBox props',this.props.background)
        return (
            <div style={{background:background}} className='Color-Box'>
                <div className='copy-container'>
                    <div className='box-content'>
                    <span>{name}</span> 
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        )
    }
}
export default ColorBox
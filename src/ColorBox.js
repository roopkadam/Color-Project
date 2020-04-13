import React, { Component } from 'react'
import './colorBox.css'

class ColorBox extends Component {
    render() {
        console.log('colorBox props',this.props.background)
        return (
            <div style={{background: this.props.background}} className='Color-Box'>
                <span>{this.props.name}</span> 
            </div>
        )
    }
}
export default ColorBox
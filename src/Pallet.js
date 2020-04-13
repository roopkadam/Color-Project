import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallet.css'

 class Pallet extends Component {
    render() {
        const colorBoxes = 
            this.props.colors.map((color)=>(
                // console.log('item', item)
                <ColorBox background={color.color} name={color.name}/>
                ))
        
        
        return (
            <div className='Pallet'>
                {/* navbar goes here */}
                <div className='Pallet-colors'>
                    {
                        colorBoxes
                    }
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Pallet
import React, { Component } from 'react'
import Pallet from './Pallet';
import seedColor from './seedColor'

console.log('ssedColor', seedColor)
class App extends Component {
  render() {
      return (
          <div>
              <Pallet {...seedColor[0]}/>
          </div>
      )
  }
}

export default App
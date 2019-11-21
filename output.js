import React, { Component } from 'react'
import ConsoleHistory from './ConsoleHistory'

class Output extends Component {
  state = {
    index: 1,
    current: 'Current',
    history: []
  }



  addMessage = message => 
    this.setState(state => ({ history: [state.history, message]}))
  

  render() {
    return (
      <div>
        <label htmlFor="Console">Console</label>
        <ConsoleHistory index={this.state.index} line={this.state.current} />
        {this.state.history.map((index, line) => 
          <ConsoleHistory
            key={index}
            index={index}
            line={line}
          />  
        )}
        
      </div>
    )
  }
}

export default Output
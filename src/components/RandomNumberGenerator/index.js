// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  onGenerate = () => {
    const ranNum = Math.ceil(Math.random() * 100)

    this.setState({count: ranNum})
  }
  re
  render() {
    const {count} = this.state
    return(
      <div className="main-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.onGenerate}>Generate</button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

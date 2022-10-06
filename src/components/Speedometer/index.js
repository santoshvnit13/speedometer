// Write your code here
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    } else if (count === 200) {
      this.setState(prevState => ({count: 200}))
    }
  }
  applyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    } else if (count === 0) {
      this.setState(prevState => ({count: 0}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <div>
          <h1>Speed is {count}mph</h1>
          <p>Min limit is 0mph, Max limit is 200mph</p>
          <button onClick={this.accelerate}>Accelerate</button>
          <button onClick={this.applyBreak}> Apply Brake </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

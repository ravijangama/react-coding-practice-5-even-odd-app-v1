// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    const randomNum = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    const jsxElement = (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-type">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementCount}
          >
            Increment
          </button>
          <p className="statement">
            *Increase By Random Number Between 0 to 100{' '}
          </p>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default EvenOddApp

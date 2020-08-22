import React, { Component } from 'react';

class TemperatureUnit extends Component {
  constructor() {
    super()
    this.state = {
      celsiusInput: 1,
      fahrenheitInput: 33.8,
    }
    this.celsiusHandleChange = this.celsiusHandleChange.bind(this)
    this.fahrenheitHandleChange = this.fahrenheitHandleChange.bind(this)
  }

  celsiusHandleChange(event) {
    this.setState({
      celsiusInput: event.target.value,
      fahrenheitInput: (event.target.value * (9 / 5) + 32).toFixed(2)
    })
  }

  fahrenheitHandleChange(event) {
    this.setState({
      celsiusInput: ((event.target.value - 32) * 5 / 9).toFixed(2),
      fahrenheitInput: event.target.value
    })
  }


  render() {
    return (
      <div className="card">
        <div className="item">
          C: <input onChange={this.celsiusHandleChange} value={this.state.celsiusInput}></input>
        </div>
        <div className="item">
          F: <input onChange={this.fahrenheitHandleChange} value={this.state.fahrenheitInput}></input>
        </div>
      </div >
    )
  }
}

export default TemperatureUnit
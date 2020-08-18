import React, { Component } from 'react';
class Timestamp extends Component {
  constructor() {
    super()
    this.state = {
      timestampInput: Math.floor(Date.now() / 1000),
      dateInput: Date(),

    }
    this.timestampHandleChange = this.timestampHandleChange.bind(this)
    this.dateHandleChange = this.dateHandleChange.bind(this)
  }

  timestampHandleChange(event) {
    this.setState({
      timestampInput: event.target.value,
      dateInput: Date(event.target.value * 1000)
    })
  }
  dateHandleChange(event) {
    this.setState({
      timestampInput: Date.parse(event.target.value) / 1000,
      dateInput: event.target.value
    })
  }


  render() {
    return (
      <div className="card">
        <div className="item">
          Timestamp: <input onChange={this.timestampHandleChange} value={this.state.timestampInput}></input>
        </div>
        <div className="item">
          Date: <input onChange={this.dateHandleChange} value={this.state.dateInput}></input>
        </div>
      </div >
    )
  }
}

export default Timestamp
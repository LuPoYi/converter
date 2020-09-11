import React, { Component } from 'react';

class ColorCode extends Component {
  constructor() {
    super()
    this.state = {
      rInput: 0,
      gInput: 0,
      bInput: 0,
      hexInput: "#000000",
    }
    this.rHandleChange = this.rHandleChange.bind(this)
    this.gHandleChange = this.gHandleChange.bind(this)
    this.bHandleChange = this.bHandleChange.bind(this)
    this.hexHandleChange = this.hexHandleChange.bind(this)
  }

  rHandleChange(event) {
    this.setState({
      rInput: event.target.value,
    })
    this.rgbHandleChange()
  }

  gHandleChange(event) {
    this.setState({
      gInput: event.target.value,
    })
    this.rgbHandleChange()
  }

  bHandleChange(event) {
    this.setState({
      bInput: event.target.value,
    })
    this.rgbHandleChange()
  }

  rgbHandleChange() {
    this.setState({
      hexInput: `#${this.state.rInput.toString(16)}${this.state.gInput.toString(16)}${this.state.bInput.toString(16)}`
    })
  }

  hexHandleChange(event) {
    let r = parseInt(event.target.value.slice(1, 3), 16)
    let g = parseInt(event.target.value.slice(3, 5), 16)
    let b = parseInt(event.target.value.slice(5, 7), 16)

    this.setState({
      rInput: r,
      gInput: g,
      bInput: b,

      rgbInput: ((event.target.value - 32) * 5 / 9).toFixed(2),
    })
  }


  render() {
    return (
      <div className="card">
        <div className="item">
          R: <input onChange={this.rHandleChange} value={this.state.rInput}></input>
          G: <input onChange={this.gHandleChange} value={this.state.gInput}></input>
          B: <input onChange={this.bHandleChange} value={this.state.bInput}></input>
        </div>
        <div className="item">
          F: <input onChange={this.hexHandleChange} value={this.state.hexInput}></input>
        </div>
      </div >
    )
  }
}

export default ColorCode
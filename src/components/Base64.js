import React, { Component } from 'react';
class Base64 extends Component {
  constructor() {
    super()
    this.state = {
      stringInput: "",
      base64Input: "",

    }
    this.stringHandleChange = this.stringHandleChange.bind(this)
    this.base64HandleChange = this.base64HandleChange.bind(this)
  }

  stringHandleChange(event) {
    let value
    try {
      value = btoa(event.target.value)
    } catch {
      value = "ERROR"
    }
    
    this.setState({
      stringInput: event.target.value,
      base64Input: value
    })
  }
  base64HandleChange(event) {
    let value
    try {
      value = atob(event.target.value)
    } catch {
      value = "ERROR"
    }
    this.setState({
      stringInput: value,
      base64Input: event.target.value
    })
  }


  render() {
    return (
      <div className="card">
        <div className="item">
        string: <input onChange={this.stringHandleChange} value={this.state.stringInput}></input>
        </div>
        <div className="item">
          Base64: <input onChange={this.base64HandleChange} value={this.state.base64Input}></input>
        </div>
      </div >
    )
  }
}

export default Base64
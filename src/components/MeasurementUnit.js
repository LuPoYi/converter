import React, { Component } from 'react';


class MeasurementUnit extends Component {
  constructor() {
    super()
    this.state = {
      cmInput: 1,
      inchInput: 0.3937,
    }
    this.cmHandleChange = this.cmHandleChange.bind(this)
    this.inchHandleChange = this.inchHandleChange.bind(this)
  }

  cmHandleChange(event) {
    this.setState({
      cmInput: event.target.value,
      inchInput: (event.target.value * 0.3937).toFixed(4)
    })
  }
  inchHandleChange(event) {
    this.setState({
      cmInput: (event.target.value / 0.3937).toFixed(4),
      inchInput: event.target.value
    })
  }


  render() {
    return (
      <div className="card">
        <div className="item">
          cm: <input onChange={this.cmHandleChange} value={this.state.cmInput}></input>
        </div>
        <div className="item">
          inch: <input onChange={this.inchHandleChange} value={this.state.inchInput}></input>
        </div>
      </div >
    )
  }
}

export default MeasurementUnit
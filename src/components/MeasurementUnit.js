import React, { Component } from 'react';


class MeasurementUnit extends Component {
  cmInchRatio = 0.3937
  kgPoundRatio = 2.2046226218

  constructor() {
    super()
    this.state = {
      cmInput: 1,
      inchInput: 0.3937,
      kgInput: 1,
      poundInput: 2.2046226218,

    }
    this.cmHandleChange = this.cmHandleChange.bind(this)
    this.inchHandleChange = this.inchHandleChange.bind(this)
    this.kgHandleChange = this.kgHandleChange.bind(this)
    this.poundHandleChange = this.poundHandleChange.bind(this)
  }

  cmHandleChange(event) {
    this.setState({
      kgInput: event.target.value,
      poundInput: (event.target.value * this.cmInchRatio).toFixed(4)
    })
  }
  inchHandleChange(event) {
    this.setState({
      kgInput: (event.target.value / this.cmInchRatio).toFixed(4),
      poundInput: event.target.value
    })
  }
  kgHandleChange(event) {
    this.setState({
      kgInput: event.target.value,
      poundInput: (event.target.value * this.kgPoundRatio).toFixed(4)
    })
  }
  poundHandleChange(event) {
    this.setState({
      kgInput: (event.target.value / this.kgPoundRatio).toFixed(4),
      poundInput: event.target.value
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
        <div className="item">
          kg: <input onChange={this.kgHandleChange} value={this.state.kgInput}></input>
        </div>
        <div className="item">
          pound: <input onChange={this.poundHandleChange} value={this.state.poundInput}></input>
        </div>
      </div >
    )
  }
}

export default MeasurementUnit
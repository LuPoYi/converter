import React, { useState } from 'react'
const MeasurementUnit = () => {
  const cmInchRatio = 0.3937
  const kgPoundRatio = 2.2046226218

  const [cm, setCm] = useState(1)
  const [inch, setInch] = useState(0.3937)
  const [kg, setKg] = useState(1)
  const [pound, setPound] = useState(2.2046226218)

  const cmHandleChange = (e) => {
    setCm(e.target.value)
    setInch((e.target.value * cmInchRatio).toFixed(4))
  }

  const inchHandleChange = (e) => {
    setInch(e.target.value)
    setCm((e.target.value / cmInchRatio).toFixed(4))
  }

  const kgHandleChange = (e) => {
    setKg(e.target.value)
    setPound((e.target.value * kgPoundRatio).toFixed(4))
  }

  const poundHandleChange = (e) => {
    setPound(e.target.value)
    setKg((e.target.value / kgPoundRatio).toFixed(4))
  }

  return (
    <div className="card">
      <div className="item">
        cm: <input onChange={cmHandleChange} value={cm}></input>
      </div>
      <div className="item">
        inch: <input onChange={inchHandleChange} value={inch}></input>
      </div>
      <div className="item">
        kg: <input onChange={kgHandleChange} value={kg}></input>
      </div>
      <div className="item">
        pound: <input onChange={poundHandleChange} value={pound}></input>
      </div>
    </div>
  )
}

export default MeasurementUnit

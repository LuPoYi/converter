import React, { useState } from 'react'

function TemperatureUnit() {
  const [celsius, setCelsius] = useState(1)
  const [fahrenheit, setFahrenheit] = useState(33.8)

  const celsiusHandleChange = (e) => {
    setCelsius(e.target.value)
    setFahrenheit((e.target.value * (9 / 5) + 32).toFixed(2))
  }

  const fahrenheitHandleChange = (e) => {
    setFahrenheit(e.target.value)
    setCelsius((((e.target.value - 32) * 5) / 9).toFixed(2))
  }

  return (
    <div className="card">
      <div className="item">
        C: <input onChange={celsiusHandleChange} value={celsius}></input>
      </div>
      <div className="item">
        F: <input onChange={fahrenheitHandleChange} value={fahrenheit}></input>
      </div>
    </div>
  )
}

export default TemperatureUnit

import React from 'react'
import './App.css'
import MeasurementUnit from './components/MeasurementUnit'
import Timestamp from './components/Timestamp'
import TemperatureUnit from './components/TemperatureUnit'
import Base64 from './components/Base64'
import ColorCode from './components/ColorCode'
import CamelCase from './components/CamelCase'

function App() {
  return (
    <div className="App">
      <MeasurementUnit />
      <ColorCode />
      <Timestamp />
      <TemperatureUnit />
      <Base64 />
      <CamelCase />
    </div>
  )
}

export default App

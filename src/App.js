import React from 'react';
import './App.css';
import MeasurementUnit from './components/MeasurementUnit';
import Timestamp from './components/Timestamp';
import TemperatureUnit from './components/TemperatureUnit';


function App() {
  return (
    <div className="App">
      <MeasurementUnit />
      <Timestamp />
      <TemperatureUnit />
    </div>
  );
}

export default App;

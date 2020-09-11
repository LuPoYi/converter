import React from 'react';
import './App.css';
import MeasurementUnit from './components/MeasurementUnit';
import Timestamp from './components/Timestamp';
import TemperatureUnit from './components/TemperatureUnit';
import Base64 from './components/Base64';
import ColorCode from './components/ColorCode';


function App() {
  return (
    <div className="App">
      <MeasurementUnit />
      <Timestamp />
      <TemperatureUnit />
      <Base64 />
      {/* <ColorCode /> */}
    </div>
  );
}

export default App;

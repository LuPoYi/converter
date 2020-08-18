import React from 'react';
import './App.css';
import MeasurementUnit from './components/MeasurementUnit';
import Timestamp from './components/Timestamp';


function App() {
  return (
    <div className="App">
      <MeasurementUnit />
      <Timestamp />
    </div>
  );
}

export default App;

import React from 'react'
import './App.css'
import Header from './containers/Header'
import MeasurementUnit from './components/MeasurementUnit'
import Timestamp from './components/Timestamp'
import TemperatureUnit from './components/TemperatureUnit'
import Base64 from './components/Base64'
import ColorCode from './components/ColorCode'
import CamelCase from './components/CamelCase'
import CompoundInterest from './components/CompoundInterest'

import GridItem from './components/Grid/GridItem.js'
import GridContainer from './components/Grid/GridContainer.js'

import { makeStyles } from '@material-ui/core/styles'
import styles from './components/Card/dashboardStyle.js'

const useStyles = makeStyles(styles)
function App() {
  return (
    <div className="App">
      <Header />
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <CompoundInterest />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <MeasurementUnit />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <ColorCode />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Timestamp />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <TemperatureUnit />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Base64 />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CamelCase />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default App

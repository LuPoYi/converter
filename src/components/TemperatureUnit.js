import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'

const useStyles = makeStyles(styles)

function TemperatureUnit() {
  const classes = useStyles()
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
    <Card>
      <CardHeader color="info">
        <h4 className={classes.cardTitleWhite}>Temperature</h4>
      </CardHeader>

      <CardBody>
        <TextField
          label="Celsius"
          variant="outlined"
          onChange={celsiusHandleChange}
          value={celsius}
        />
        <TextField
          label="Fahrenheit"
          variant="outlined"
          onChange={fahrenheitHandleChange}
          value={fahrenheit}
        />
      </CardBody>
    </Card>
  )
}

export default TemperatureUnit

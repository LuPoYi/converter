import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    width: '50%',
    float: 'left',
  },
})

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
    <Card className={classes.root}>
      <CardContent>
        <Typography variant={"h6"} gutterBottom>Temperature Unit</Typography>
        <Divider className={classes.divider} light />
      </CardContent>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}

export default TemperatureUnit

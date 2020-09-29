import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    width: '50%',
    float: 'left',
  },
})

const MeasurementUnit = () => {
  const classes = useStyles()
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
    <Card className={classes.root}>
      <CardContent>
        <TextField label="CM" variant="outlined" onChange={cmHandleChange} value={cm} />
        <TextField label="inch" variant="outlined" onChange={inchHandleChange} value={inch} />
      </CardContent>
      <CardContent>
        <TextField label="KG" variant="outlined" onChange={kgHandleChange} value={kg} />
        <TextField label="inch" variant="outlined" onChange={poundHandleChange} value={pound} />
      </CardContent>
    </Card>
  )
}

export default MeasurementUnit

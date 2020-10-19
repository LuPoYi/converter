import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Divider from '@material-ui/core/Divider'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'

const useStyles = makeStyles(styles)

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
    <Card>
      <CardHeader color="warning">
        <h4 className={classes.cardTitleWhite}>Measurement Unit</h4>
      </CardHeader>
      <CardBody>
        <TextField label="CM" variant="outlined" onChange={cmHandleChange} value={cm} />
        <TextField label="inch" variant="outlined" onChange={inchHandleChange} value={inch} />
        <Divider variant="middle" />

        <TextField label="KG" variant="outlined" onChange={kgHandleChange} value={kg} />
        <TextField label="inch" variant="outlined" onChange={poundHandleChange} value={pound} />
      </CardBody>
    </Card>
  )
}

export default MeasurementUnit

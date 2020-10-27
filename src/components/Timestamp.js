import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'

const useStyles = makeStyles(styles)

function Timestamp() {
  const classes = useStyles()
  const [date, setDate] = useState(Date())
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000))
  const dateHandleChange = (e) => {
    setDate(e.target.value)
    setTimestamp(Date.parse(e.target.value) / 1000)
  }
  const timestampHandleChange = (e) => {
    setTimestamp(e.target.value)
    setDate(Date(parseInt(e.target.value) * 1000))
  }

  return (
    <Card>
      <CardHeader color="success">
        <h4 className={classes.cardTitleWhite}>Timestamp</h4>
      </CardHeader>
      <CardBody>
        <TextField label="Date" variant="outlined" onChange={dateHandleChange} value={date} />
        <TextField
          label="Timestamp"
          variant="outlined"
          onChange={timestampHandleChange}
          value={timestamp}
        />
      </CardBody>
    </Card>
  )
}

export default Timestamp

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
    <Card className={classes.root}>
      <CardContent>
        <TextField label="Date" variant="outlined" onChange={dateHandleChange} value={date} />
        <TextField
          label="Timestamp"
          variant="outlined"
          onChange={timestampHandleChange}
          value={timestamp}
        />
      </CardContent>
    </Card>
  )
}

export default Timestamp

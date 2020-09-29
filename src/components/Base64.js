import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  root: {
    width: '100%',
    float: 'left',
  },
})

function Base64() {
  const classes = useStyles()

  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    let value
    try {
      value = btoa(e.target.value)
    } catch {
      value = 'ERROR'
    }
    setBase64(value)
  }

  const base64HandleChange = (e) => {
    setBase64(e.target.value)
    let value
    try {
      value = atob(e.target.value)
    } catch {
      value = 'ERROR'
    }
    setText(value)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField label="Text" variant="outlined" onChange={handleTextChange} value={text} />
        <TextField label="Base64" variant="outlined" onChange={base64HandleChange} value={base64} />
      </CardContent>
    </Card>
  )
}

export default Base64

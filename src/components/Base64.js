import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'

const useStyles = makeStyles(styles)

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
    <Card>
      <CardHeader color="rose">
        <h4 className={classes.cardTitleWhite}>Base64</h4>
      </CardHeader>

      <CardBody>
        <TextField label="Text" variant="outlined" onChange={handleTextChange} value={text} />
        <TextField label="Base64" variant="outlined" onChange={base64HandleChange} value={base64} />
      </CardBody>
    </Card>
  )
}

export default Base64

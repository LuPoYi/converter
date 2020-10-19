import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import styles from './Card/dashboardStyle.js'
import Divider from '@material-ui/core/Divider'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import InputAdornment from '@material-ui/core/InputAdornment'
import Card from './Card/Card.js'
import CardHeader from './Card/CardHeader.js'
import CardBody from './Card/CardBody.js'

const useStyles = makeStyles(styles)

const ColorCode = () => {
  const classes = useStyles()
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const [hex, setHex] = useState('#000000')

  const handleRedChange = (e) => {
    let value = e.target.value
    if (value.toString().length === 0) {
      setRed('')
      setHex('ERROR')
    } else if (value >= 0 && value <= 255) {
      setRed(parseInt(value))

      let r = parseInt(value).toString(16)
      let g = parseInt(green).toString(16)
      let b = parseInt(blue).toString(16)

      if (r.length === 1) {
        r = '0' + r
      }
      if (g.length === 1) {
        g = '0' + g
      }
      if (r.length === 1) {
        b = '0' + b
      }
      setHex('#' + r + g + b)
    }
  }
  const handleGreenChange = (e) => {
    let value = e.target.value
    if (value.toString().length === 0) {
      setGreen('')
      setHex('ERROR')
    } else if (value >= 0 && value <= 255) {
      setGreen(parseInt(value))

      let r = parseInt(red).toString(16)
      let g = parseInt(value).toString(16)
      let b = parseInt(blue).toString(16)

      if (r.length === 1) {
        r = '0' + r
      }
      if (g.length === 1) {
        g = '0' + g
      }
      if (r.length === 1) {
        b = '0' + b
      }
      setHex('#' + r + g + b)
    }
  }
  const handleBlueChange = (e) => {
    let value = e.target.value
    if (value.toString().length === 0) {
      setBlue('')
      setHex('ERROR')
    } else if (value >= 0 && value <= 255) {
      setBlue(parseInt(value))

      let r = parseInt(red).toString(16)
      let g = parseInt(green).toString(16)
      let b = parseInt(value).toString(16)

      if (r.length === 1) {
        r = '0' + r
      }
      if (g.length === 1) {
        g = '0' + g
      }
      if (r.length === 1) {
        b = '0' + b
      }
      setHex('#' + r + g + b)
    }
  }
  const handleHexChange = (e) => {
    let value = e.target.value
    let r, g, b

    if (value.slice(0, 1) === '#' && value.length <= 7) {
      if (value.length === 7) {
        r = parseInt(value.slice(1, 3), 16)
        g = parseInt(value.slice(3, 5), 16)
        b = parseInt(value.slice(5, 7), 16)
      } else {
        r = -1
        g = -1
        b = -1
      }
      setHex(value)
      setRed(r)
      setGreen(g)
      setBlue(b)
    }
  }

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>RGB Hex</h4>
      </CardHeader>

      <CardBody>
        <TextField label="Red" variant="outlined" onChange={handleRedChange} value={red} />
        <TextField label="Green" variant="outlined" onChange={handleGreenChange} value={green} />
        <TextField label="Blue" variant="outlined" onChange={handleBlueChange} value={blue} />
        <Divider light />

        <TextField
          label="Hex"
          variant="outlined"
          onChange={handleHexChange}
          value={hex}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ColorLensIcon style={{ color: hex }} />
              </InputAdornment>
            ),
          }}
        />
      </CardBody>
    </Card>
  )
}

export default ColorCode

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    width: '100%',
    float: 'left',
  },
  textFieldMax: {
    width: '100%',
  },
  textField: {
    width: '50%',
    float: 'left',
  },
})

function CamelCase() {
  const classes = useStyles()
  const [text, setText] = useState('')
  const [camelCase, setCamelCase] = useState('')
  const [kebabCase, setKebabCase] = useState('')
  const [titleCase, setTitleCase] = useState('')
  const [snakeCase, setSnakeCase] = useState('')
  const [upperCase, setUpperCase] = useState('')
  const [lowerCase, setLowerCase] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    setCamelCase(toCamelCase(e.target.value))
    setKebabCase(toKebabCase(e.target.value))
    setTitleCase(toTitleCase(e.target.value))
    setSnakeCase(toSnakeCase(e.target.value))
    setUpperCase(e.target.value.toUpperCase())
    setLowerCase(e.target.value.toLowerCase())
  }

  const handleCamelCaseChange = (e) => {
    setCamelCase(e.target.value)
  }
  const handleKebabCaseChange = (e) => {
    setKebabCase(e.target.value)
  }
  const handleTitleCaseChange = (e) => {
    setTitleCase(e.target.value)
  }
  const handleSnakeCaseChange = (e) => {
    setSnakeCase(e.target.value)
  }
  const handleUpperCaseChange = (e) => {
    setUpperCase(e.target.value)
  }
  const handleLowerCaseChange = (e) => {
    setLowerCase(e.target.value)
  }

  function toCamelCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element.toLowerCase()
        ans += index === 0 ? item : item[0].toUpperCase() + item.slice(1)
      }
    })
    return ans
  }

  function toKebabCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element.toLowerCase()
        ans += index === 0 ? item : '-' + item
      }
    })
    return ans
  }

  function toTitleCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
        ans += index === 0 ? item : ' ' + item
      }
    })
    return ans
  }

  function toSnakeCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
        ans += index === 0 ? item : '_' + item
      }
    })
    return ans
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant={"h6"} gutterBottom>Text to camelBase</Typography>
        <Divider className={classes.divider} light />
      </CardContent>
      <CardContent>
        <TextField
          label="Text"
          variant="outlined"
          onChange={handleTextChange}
          value={text}
          className={classes.textFieldMax}
        />
      </CardContent>
      <CardContent>
        <TextField
          label="camelCase"
          variant="outlined"
          onChange={handleCamelCaseChange}
          value={camelCase}
          className={classes.textField}
        />
        <TextField
          label="KebabCase"
          variant="outlined"
          onChange={handleKebabCaseChange}
          value={kebabCase}
          className={classes.textField}
        />
        <TextField
          label="Title Case"
          variant="outlined"
          onChange={handleTitleCaseChange}
          value={titleCase}
          className={classes.textField}
        />
        <TextField
          label="Snake_Case"
          variant="outlined"
          onChange={handleSnakeCaseChange}
          value={snakeCase}
          className={classes.textField}
        />
        <TextField
          label="UPPERCASE"
          variant="outlined"
          onChange={handleUpperCaseChange}
          value={upperCase}
          className={classes.textField}
        />
        <TextField
          label="lowercase"
          variant="outlined"
          onChange={handleLowerCaseChange}
          value={lowerCase}
          className={classes.textField}
        />
      </CardContent>
    </Card>
  )
}

export default CamelCase

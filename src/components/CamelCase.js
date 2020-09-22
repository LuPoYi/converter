import React, { useState } from 'react'

function CamelCase() {
  const [text, setText] = useState('')
  const [camelCase, setCamelCase] = useState('')
  const [kebabCase, setKebabCase] = useState('')
  const [titleCase, setTitleCase] = useState('')
  const [snakeCase, setSnakeCase] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    setCamelCase(toCamelCase(e.target.value))
    setKebabCase(toKebabCase(e.target.value))
    setTitleCase(toTitleCase(e.target.value))
    setSnakeCase(toSnakeCase(e.target.value))
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
    <div className="card">
      <div className="item">
        Text:
        <input onChange={handleTextChange} value={text} placeholder="input here"></input>
      </div>
      <div className="item">
        camelCase:
        <input onChange={handleCamelCaseChange} value={camelCase} placeholder="inputHere"></input>
      </div>
      <div className="item">
        kebab-case:
        <input onChange={handleKebabCaseChange} value={kebabCase} placeholder="input-here"></input>
      </div>
      <div className="item">
        Title Case:
        <input onChange={handleTitleCaseChange} value={titleCase} placeholder="Input Here"></input>
      </div>
      <div className="item">
        Snake_Case:
        <input onChange={handleSnakeCaseChange} value={snakeCase} placeholder="Input_Here"></input>
      </div>
    </div>
  )
}

export default CamelCase

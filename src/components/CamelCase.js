import React, { useState } from 'react'

function CamelCase() {
  const [text, setText] = useState('')
  const [camelCase, setCamelCase] = useState('')
  const [kebabCase, setKebabCase] = useState('')
  function handleTextChange(e) {
    setText(e.target.value)
    setCamelCase(toCamelCase(e.target.value))
    setKebabCase(toKebabCase(e.target.value))
  }
  function handleCamelCaseChange(e) {
    setCamelCase(e.target.value)
  }
  function handleKebabCaseChange(e) {
    setKebabCase(e.target.value)
  }

  function toCamelCase(str) {
    let ans = ''
    str.split(' ').forEach(function (element, index) {
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
      let item = element.toLowerCase()
      ans += index === 0 ? item : '-' + item
    })
    return ans
  }

  return (
    <div className="card">
      <div className="item">
        Text:
        <input onChange={handleTextChange} value={text}></input>
      </div>
      <div className="item">
        camelCase:
        <input onChange={handleCamelCaseChange} value={camelCase}></input>
      </div>
      <div className="item">
        kebab-case:
        <input onChange={handleKebabCaseChange} value={kebabCase}></input>
      </div>
    </div>
  )
}

export default CamelCase

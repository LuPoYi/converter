import React, { useState } from 'react'

function Base64() {
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
    <div className="card">
      <div className="item">
        string: <input onChange={handleTextChange} value={text}></input>
      </div>
      <div className="item">
        Base64: <input onChange={base64HandleChange} value={base64}></input>
      </div>
    </div>
  )
}

export default Base64

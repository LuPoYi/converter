import React, { useState } from 'react'

function Timestamp() {
  const [date, setDate] = useState(Date())
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000))

  const dateHandleChange = (e) => {
    setDate(e.target.value)
    setTimestamp(Date.parse(e.target.value) / 1000)
  }

  const timestampHandleChange = (e) => {
    setTimestamp(e.target.value)
    setDate(Date(e.target.value * 1000))
  }

  return (
    <div className="card">
      <div className="item">
        Date: <input onChange={dateHandleChange} value={date}></input>
      </div>
      <div className="item">
        Timestamp: <input onChange={timestampHandleChange} value={timestamp}></input>
      </div>
    </div>
  )
}

export default Timestamp

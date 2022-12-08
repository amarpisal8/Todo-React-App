// 

import React, { useState } from 'react'

function Counting() {
const [count, setCount] = useState(0)

const increase = () => {
    setCount(count+1)
}
const decrease = () => {
    if(count > 0) {
   setCount(count-1)
    }
}

const dlt = () => {
    setCount(0)
 }


    return (
    <div >
      <h1>Task Counter</h1>
      <button onClick={increase}>Add a task</button>
      <button onClick={decrease}>Delete a task</button>
      <button onClick={dlt}>Delete all task</button>
      <h2>Number of Tasks: {count} </h2>
    </div>
  )
}

export default Counting




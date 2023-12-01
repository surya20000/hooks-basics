import React, { useState } from 'react'
import './UseContext.css'


const UseState = () => {
  const [count, setCount] = useState(0)
  function handelClick() {
    setCount(count + 1)
  }
  return (
    <div>
      <p className='like-count'>
        <h2>{count}</h2>
        <button onClick={handelClick}>Like</button>
      </p>
    </div>
  )
}

export default UseState

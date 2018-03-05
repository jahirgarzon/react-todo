import React from 'react'

const Counter = props => {
      const items = props.items.reduce((a,c)=> !c.completed ? a+1 : a , 0)
  return (
      <span className="counter">
          <strong>{items} </strong>
           {items===1?'item':'items'}
      </span >
  )
}
export default Counter;
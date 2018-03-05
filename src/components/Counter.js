import React from 'react'

const Counter = props => {
    console.log(props)
    const items = props.items.reduce((a,c)=> { console. log(a) 
        return !c.completed ? a+1 :a} ,0)
  return (
      <pre>
          <strong>{items} {items===1?" item":" items"}</strong>
      </pre>
  )
}
export default Counter;
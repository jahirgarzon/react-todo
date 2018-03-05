import React from 'react'

const Item = props => {
    const handleClick = props.clickHandler;
    const { item } = props;

    return (<li className={item.completed ? "complete" : "incomplete"}
        onClick={(e) => handleClick(item.id, e)}>{item.text}
        <span className="glyphicon destroy ">&#xe020;</span>
     </li>)
}


export default Item;
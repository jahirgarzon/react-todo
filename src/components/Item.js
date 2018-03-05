import React from 'react'

const Item = props => {
    const handleClick = props.clickHandler;
    const { item } = props;

    return (<li className={item.completed ? "complete" : "incomplete"}
        onClick={(e) => handleClick(item.id, e)}>{item.text}
        <span className="glyphicon trash delete-item">&#xe020;</span>
     </li>)
}


export default Item;
import React, { PureComponent } from 'react';
import Item from './Item'
class ItemList extends PureComponent {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(id, e) {
        e.target.classList.contains('delete-item') ?
            this.props.methods.deleteItem(id) :
            this.props.methods.toggleItemCompleted(id)
    }

    mouseOverHandler(e) {
        e.target.classList.add('over')
    }
    
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.items.map((item) =>
                    (
                        <Item key={item.id} clickHandler={this.clickHandler} item={item} />
                    )
                )}
            </ul>)
    }
}



export default ItemList;


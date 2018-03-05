import React, { PureComponent } from 'react'
import Todo from '../components/Todo'

class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.makeNewItem = this.makeNewItem.bind(this);
        this.toggleItemCompleted = this.toggleItemCompleted.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    makeNewItem(content) {
        const newItem = {
            text: content,
            id: Date.now(),
            completed: false
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem)
        }));
    }

    toggleItemCompleted(id) {
        this.setState(prevState => ({
            items: prevState.items.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        }))
    }
    
    deleteItem(id) {
        let updatedItems = [...this.state.items].filter(item => item.id !== id);

        this.setState({ items: updatedItems })
    }

    render() {
        return (<Todo
            items={this.state.items}
            methods={
                {
                    toggleItemCompleted: this.toggleItemCompleted,
                    deleteItem: this.deleteItem,
                    makeNewItem: this.makeNewItem
                }
            }
        />);

    }
}
export default TodoContainer;
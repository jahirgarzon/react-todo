import React, { PureComponent } from 'react';
import logo from '../logo.png';
import '../App.css';
import NewItemForm from '../components/NewItemForm';
import ItemList from '../components/ItemList';
import Counter from '../components/Counter';

class Todo extends PureComponent {

  render() {
    const { toggleItemCompleted, deleteItem, makeNewItem } = this.props.methods
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="row">
          <div className="col-md-4 col-md-offset-4 todo ">
            <h1 className="App-title">Todo  </h1>
            <Counter items={this.props.items}/>
            <NewItemForm makeNewItem={makeNewItem} />
            {this.props.items.length > 0 ?
              <ItemList items={this.props.items}
                methods={
                  {
                    toggleItemCompleted: toggleItemCompleted,
                    deleteItem: deleteItem
                  }
                } />
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;

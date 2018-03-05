import React, { PureComponent } from 'react';

class NewItemForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.trim().length) {
      return;
    }
    else {
      this.props.makeNewItem(this.state.text.trim())
      this.setState({ text: '' })
    }
  }
  
  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <form className="new-todo input-group" onSubmit={this.handleSubmit}>
          <input className="form-control"onChange={this.handleChange}
            value={this.state.text} autoFocus />
         <span className="input-group-btn">
          <button className="btn btn-primary btn-md">+</button>
        </span>
        </form>
      </React.Fragment>)
  }
}

export default NewItemForm;
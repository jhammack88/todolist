import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      done: false
    };
  }

  toggleDone = () => {
    fetch(`http://localhost:5000/todo/${this.props.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.props.title,
        done: !this.state.done
      })
    }).then(this.setState({ done: !this.state.done }));
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={this.toggleDone}
          defaultChecked={this.state.done}
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
        <button onClick={() => this.props.delete(this.props.id)}>X</button>
      </div>
    );
  }
}

export default TodoItem;

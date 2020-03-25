import React, { Component } from "react";

class Todos extends Component {
  state = {
    todos: [
      { id: 1, content: "drink some coffee" },
      { id: 2, content: "play pubg" }
    ]
  };

  render() {
    return (
      <div class="todos">
        <p>{this.state.todos}</p>
      </div>
    );
  }
}

export default Todos;

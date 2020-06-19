import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <form id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

// Goals checklist component
export default class Checklist extends Component {
  constructor(props) {
    super(props);

    // The user's input is empty then put into a list
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // The user's input will be passed through change input method
  changeUserInput(input) {
    this.setState({
      userInput: input,
    });
  }

  // The user's input is placed into an array of goals list
  addToList(input) {
    const listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: "",
    });
  }

  // Input box styling + button to pass input
  render() {
    return (
      <div className="todo_list">
        <input
          id="search_bar_goal"
          value={this.state.userInput}
          type="text"
          onChange={(e) => this.changeUserInput(e.target.value)}
        />
        <button
          id="goal_btn"
          onClick={() => this.addToList(this.state.userInput)}
        >
          Add
        </button>
        <ul className="goal_list">
          {this.state.list.map((val) => (
            <li className="goal_text">{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

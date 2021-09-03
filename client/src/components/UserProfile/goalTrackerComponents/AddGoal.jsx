import React, { useState } from "react";
import styled from "styled-components";

class AddGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      item1: "",
      item2: "",
      item3: "",
    };
    this.sendGoal = this.sendGoal.bind(this);
    this.onChangeFn = this.onChangeFn.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(newGoal) {
    fetch("http://localhost:4000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    });
  }

  sendGoal(e) {
    e.preventDefault();
    console.log(this.state.allDate);
    this.addItem({
      name: this.state.name,
      completed: false,
      actionItems: [
        {
          name: this.state.item1,
          completed: false,
        },
        {
          name: this.state.item2,
          completed: false,
        },
        {
          name: this.state.item3,
          completed: false,
        },
      ],
    });
  }

  onChangeFn(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendGoal}>
          <input
            placeholder="goal name"
            name="name"
            value={this.state.name}
            onChange={this.onChangeFn}
          />
          <input
            placeholder="Action To DO"
            name="item1"
            value={this.state.item1}
            onChange={this.onChangeFn}
          />
          <input
            placeholder="Action To DO"
            name="item2"
            value={this.state.item2}
            onChange={this.onChangeFn}
          />
          <input
            placeholder="Action To DO"
            name="item3"
            value={this.state.item3}
            onChange={this.onChangeFn}
          />
          <input type="submit" name="Send" />
        </form>
      </div>
    );
  }
}

export default AddGoal;

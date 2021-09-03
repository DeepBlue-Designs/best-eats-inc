import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

class ListGoals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item1: "",
      item2: "",
      item3: "",
      currentGoal: {},
    };

    this.editActions = this.editActions.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.DisplayPrompt = this.DisplayPrompt.bind(this);
    this.editGoal = this.editGoal.bind(this);
  }

  deleteGoal(e) {
    var id = e.target.attributes.getNamedItem("data-tag").value;
    axios.delete("http://127.0.0.1:4000/goals/" + id);
    this.setState({ item1: "" });
  }

  editGoal(e) {
    e.preventDefault();
    var id = this.state.currentGoal.id;
    var item1Bool = document.getElementById("item1").checked;
    var item2Bool = document.getElementById("item2").checked;
    var item3Bool = document.getElementById("item3").checked;
    console.log(item1Bool + "--" + item2Bool + "--" + item3Bool);

    var editedGoal = this.state.currentGoal;
    editedGoal.actionItems[0].completed = item1Bool;
    editedGoal.actionItems[1].completed = item2Bool;
    editedGoal.actionItems[2].completed = item3Bool;

    axios.put("http://127.0.0.1:4000/goals/" + id, editedGoal);
  }

  editActions(e) {
    var obj = [];
    var id = e.target.attributes.getNamedItem("data-tag").value;
    fetch("http://127.0.0.1:4000/goals/" + id)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ currentGoal: result });
        obj = result;
      })
      .then(() => this.DisplayPrompt(obj))
      .catch(console.log);
  }

  DisplayPrompt(obj) {
    console.log(obj);
    this.setState({ item1: obj.actionItems[0].completed });
    this.setState({ item2: obj.actionItems[1].completed });
    this.setState({ item3: obj.actionItems[2].completed });
  }

  render() {
    return (
      <div>
        <h2
          style={{
            marginBottom: "30px",
            border: "2px solid black",
            textAlign: "center",
            padding: "20px",
            color: "#0375ff",
          }}
        >
          Your Goals{" "}
        </h2>
        {this.props.allUserGoals === undefined
          ? "Waiting for data ..."
          : this.props.allUserGoals.map((elm, index) => (
              <div
                key={index}
                style={{
                  fontSize: "1.5rem",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gray",
                  marginBottom: "20px",
                }}
              >
                {elm.name}
                <p
                  style={{
                    fontSize: "0.6em",
                    marginLeft: "50px",
                  }}
                >
                  <span
                    data-tag={elm.id}
                    onClick={this.editActions}
                    style={{ cursor: "pointer", marginRight: "15px" }}
                  >
                    EDIT
                  </span>
                  <span
                    data-tag={elm.id}
                    onClick={this.deleteGoal}
                    style={{ cursor: "pointer" }}
                  >
                    DELETE
                  </span>
                </p>
              </div>
            ))}

        {this.state.item1 === "" ? (
          ""
        ) : (
          <div
            style={{
              border: "1px solid black",
              marginTop: "20px",
              background: "#f7bd1191",
            }}
          >
            <form onSubmit={this.editGoal}>
              <p style={{ fontSize: "1.5rem", color: "red", margin: "10px" }}>
                Edit Goal : {this.state.currentGoal.name}
              </p>
              <label
                style={{ display: "block", fontSize: "1.3rem", margin: "10px" }}
              >
                {this.state.currentGoal.actionItems[0].name} :
                <input type="checkbox" id="item1" />
              </label>
              <label
                style={{ display: "block", fontSize: "1.3rem", margin: "10px" }}
              >
                {this.state.currentGoal.actionItems[1].name} :{" "}
                <input type="checkbox" id="item2" />
              </label>
              <label
                style={{ display: "block", fontSize: "1.3rem", margin: "10px" }}
              >
                {this.state.currentGoal.actionItems[2].name} :
                <input
                  type="checkbox"
                  id="item3"
                  onClick={() => this.setState({ item3: !this.state.item3 })}
                  onChange={() => this.setState({ item3: !this.state.item3 })}
                  checked={this.state.item3}
                />
              </label>
              <input
                style={{ padding: "5px", margin: "15px" }}
                type="button"
                value="confirm"
                onClick={this.editGoal}
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ListGoals;

/*
<form>
        <label>
          obj.name: <input type="checkbox" checked />
        </label>
      </form>

      obj.map((elm, index) => (
        <label key={index}>
          {elm.name} <input type="checkbox" checked />
        </label>
      ))
*/

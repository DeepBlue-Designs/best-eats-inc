import React, { useState } from "react";
import styled from "styled-components";

class ListGoals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.allUserGoals === undefined
          ? "Waiting for data ..."
          : this.props.allUserGoals.map((elm) => <h1>{elm.name}</h1>)}
      </div>
    );
  }
}

export default ListGoals;
// {this.arrayItems.map((elm) => elm.name)}

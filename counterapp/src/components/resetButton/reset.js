import React from "react";
import handleIncrement from "../handleIncrement/handleincrement";

class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = handleIncrement.bind(this, this.props.resetCount);
  }

  render() {
    return (
      <button className="btn" onClick={this.handleIncrement}>
        RESET
      </button>
    );
  }
}

export default Reset;

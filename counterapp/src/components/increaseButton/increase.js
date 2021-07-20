import React from "react";
import handleIncrement from "../handleIncrement/handleincrement";

class Increase extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = handleIncrement.bind(this, this.props.increaseCount);
  }

  render() {
    return (
      <button className="btn" onClick={this.handleIncrement}>
        INCREASE
      </button>
    );
  }
}

export default Increase;

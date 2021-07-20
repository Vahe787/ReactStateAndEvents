import React from "react";
import handleIncrement from "../handleIncrement/handleincrement";

class Descrease extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = handleIncrement.bind(
      this,
      this.props.descreaseCount
    );
  }

  render() {
    return (
      <button className="btn" onClick={this.handleIncrement}>
        DECRASE
      </button>
    );
  }
}

export default Descrease;

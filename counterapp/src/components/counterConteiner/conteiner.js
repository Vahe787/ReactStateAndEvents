import React from "react";
import Descrease from "../descreaseButton/descrease";
import Increase from "../increaseButton/increase";
import Reset from "../resetButton/reset";

class Conteiner extends React.Component {
  constructor(props) {
    super(props);
    let count = localStorage.getItem("count");
    let jsonCount = count ? JSON.parse(count) : {};
    let minVal = localStorage.getItem("minVal");
    let jsonMinVal = minVal ? JSON.parse(minVal) : {};
    let maxVal = localStorage.getItem("maxVal");
    let jsonMaxVal = maxVal ? JSON.parse(maxVal) : {};
    let step = localStorage.getItem("step");
    let jsonStep = step ? JSON.parse(step) : {};
    this.state = {
      count: jsonCount.count || "",
      minVal: jsonMinVal.minVal || "",
      maxVal: jsonMaxVal.maxVal || "",
      step: jsonStep.step || "",
    };
  }

  increaseCount = () => {
    this.setState((countIncrease) => {
      if (this.state.count < this.state.maxVal) {
        if (this.state.maxVal - this.state.count >= this.state.step) {
          this.saveCount();
          return {
            count: countIncrease.count + this.state.step,
          };
        }
      }
    });
  };

  descreaseCount = () => {
    this.setState((countDescrease) => {
      if (this.state.count - this.state.step >= this.state.minVal) {
        this.saveCount();
        return {
          count: countDescrease.count - this.state.step,
        };
      }
    });
  };

  inpMax = (e) => {
    this.setState((prevMaxVal) => {
      this.saveCount();
      return { maxVal: (prevMaxVal.maxVal = Number(e.target.value)) };
    });
  };

  inpMin = (e) => {
    this.setState((parallelNum) => {
      if (Number(e.target.value) < 0 || Number.isNaN(Number(e.target.value))) {
        return { count: "Error: Number Required!" };
      } else if (e.target.value === "") {
        return { count: "Error: Input is Empty!" };
      }
      this.saveCount();
      return { count: (parallelNum.minVal = Number(e.target.value)) };
    });
  };

  resetCount = () => {
    this.setState((countReset) => {
      this.saveCount();
      return {
        count: (countReset.count = this.state.minVal),
      };
    });
  };

  inpStep = (e) => {
    this.setState((prevStep) => {
      this.saveCount();
      return { step: (prevStep.step = Number(e.target.value)) };
    });
  };

  saveCount = () => {
    this.setState((jsonItems) => {
      let jsonCount = { count: jsonItems.count };
      let jsonMinVal = { minVal: jsonItems.minVal };
      let jsonMaxVal = { maxVal: jsonItems.maxVal };
      let jsonStep = { step: jsonItems.step };
      let jsonSaveCount = JSON.stringify(jsonCount);
      let jsonSaveMinVal = JSON.stringify(jsonMinVal);
      let jsonSaveMaxVal = JSON.stringify(jsonMaxVal);
      let jsonSaveStep = JSON.stringify(jsonStep);
      localStorage.setItem("count", jsonSaveCount);
      localStorage.setItem("minVal", jsonSaveMinVal);
      localStorage.setItem("maxVal", jsonSaveMaxVal);
      localStorage.setItem("step", jsonSaveStep);
    });
  };

  render() {
    return (
      <div className="main">
        <p className="count">{this.state.count}</p>
        <Increase increaseCount={this.increaseCount} />
        <Descrease descreaseCount={this.descreaseCount} />
        <Reset resetCount={this.resetCount} />
        <input
          className="inpVal"
          onChange={this.inpMin}
          placeholder="Type Minimum Value"
          defaultValue={this.state.minVal}
        ></input>
        <input
          className="inpVal"
          onChange={this.inpMax}
          placeholder="Type Maximum Value"
          defaultValue={this.state.maxVal}
        ></input>
        <input
          className="inpVal"
          onChange={this.inpStep}
          placeholder="Type Number of Steps"
          defaultValue={this.state.step}
        ></input>
      </div>
    );
  }
}
export default Conteiner;

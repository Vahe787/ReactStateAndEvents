import React from "react";
import { nameInpValid } from "../helpers/nameInpValid";
import { surnameInpValid } from "../helpers/surnameInpValid";
import { emailInpValid } from "../helpers/emailInpValid";
import { passwordInpValid } from "../helpers/passwordInpValid";
import { getData } from "../helpers/localStorage";
import { saveData } from "../helpers/localStorage";
import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    let getJsonData = getData("data");

    this.state = {
      name: getJsonData ? getJsonData.name : "",
      surname: getJsonData ? getJsonData.surname : "",
      email: getJsonData ? getJsonData.email : "",
      password: getJsonData ? getJsonData.password : "",
      nameError: "",
      surnameError: "",
      emailError: "",
      passwordError: "",
    };
  }

  handleNameValue = (value) => {
    this.setState(() => {
      const [error, name] = nameInpValid(
        value,
        this.state.nameError,
        this.state.name
      );
      return { nameError: error, name: name };
    });
  };

  handleSurnameValue = (value) => {
    this.setState(() => {
      const [error, surname] = surnameInpValid(
        value,
        this.state.surnameError,
        this.state.surname
      );
      return { surnameError: error, surname: surname };
    });
  };

  handleEmailValue = (value) => {
    this.setState(() => {
      const [error, email] = emailInpValid(
        value,
        this.state.emailError,
        this.state.email
      );
      return { emailError: error, email: email };
    });
  };

  handlePasswordValue = (value) => {
    this.setState(() => {
      const [error, password] = passwordInpValid(
        value,
        this.state.passwordError,
        this.state.password
      );
      return { passwordError: error, password: password };
    });
  };

  handleUserData = () => {
    if (
      this.state.name === "" ||
      this.state.surname === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      return (
        this.handleNameValue(this.state.name),
        this.handleSurnameValue(this.state.surname),
        this.handleEmailValue(this.state.email),
        this.handlePasswordValue(this.state.password)
      );
    }

    let jsonData = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    };
    JSON.stringify(jsonData);
    saveData("data", jsonData);
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-name">Login</h1>
        <h2 className="label-name">Name</h2>
        <input
          onChange={(e) => this.handleNameValue(e.target.value)}
          className="inpValid"
          type="text"
          name="name"
          defaultValue={this.state.name}
        ></input>
        <h3 className="name-error">{this.state.nameError}</h3>
        <h2 className="label-name">Surname</h2>
        <input
          onChange={(e) => this.handleSurnameValue(e.target.value)}
          className="inpValid"
          type="text"
          name="surname"
          defaultValue={this.state.surname}
        ></input>
        <h3 className="name-error">{this.state.surnameError}</h3>
        <h2 className="label-name">Email</h2>
        <input
          onChange={(e) => this.handleEmailValue(e.target.value)}
          className="inpValid"
          type="email"
          name="email"
          defaultValue={this.state.email}
        ></input>
        <h3 className="name-error">{this.state.emailError}</h3>
        <h2 className="label-name">Password</h2>
        <input
          onChange={(e) => this.handlePasswordValue(e.target.value)}
          className="inpValid"
          type="password"
          name="password"
          defaultValue={this.state.password}
        ></input>
        <h3 className="name-error">{this.state.passwordError}</h3>
        <button onClick={this.handleUserData} className="login-btn">
          <h3>Login</h3>
        </button>
      </div>
    );
  }
}

export default Login;

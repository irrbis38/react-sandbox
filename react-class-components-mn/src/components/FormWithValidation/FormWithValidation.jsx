import React from "react";

import styles from "./FormWithValidation.module.css";

class FormWithValidation extends React.Component {
  state = {
    email: "",
    isEmailCorrect: false,
    isChecked: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateEmail = (event) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        event.target.value
      )
    ) {
      console.log("email isn't valid");
    } else {
      this.setState({ isEmailCorrect: true });
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", isEmailCorrect: false, isChecked: false });
    console.log("Form submited");
  };

  checkboxHandler = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { email, isEmailCorrect, isChecked } = this.state;
    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <input
          className={styles.email}
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />

        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.checkboxHandler}
          />
          I agree with terms and conditions
        </label>

        <input type="submit" disabled={!isEmailCorrect && !isChecked} />
      </form>
    );
  }
}

export default FormWithValidation;

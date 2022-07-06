import React from 'react';

import styles from './Form.module.css';

class Form extends React.Component {
  state = {
    name: '',
    email: ''
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render(){
    const {name, email} = this.state;
    return (
      <form className={styles.form}>
        <input type="text" name='name' placeholder='name' value={name} onChange={this.handleChange} />
        <input type="email" name='email' placeholder='email' value={email} onChange={this.handleChange} />
      </form>
    );
  };
}

export default Form;
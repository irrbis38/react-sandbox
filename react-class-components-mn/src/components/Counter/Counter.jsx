import React from "react";

import styles from './Counter.module.css';

class Counter extends React.Component {
  state = {
    count: 0
  }

  increaseHandler = () => {
    this.setState({count: this.state.count + 1}, () => console.log('Counter increased by 1'))
  }

  decreaseHandler = () => {
    this.setState({count: this.state.count - 1}, () => console.log('Counter decreased by 1'))
  }


  render(){
    return (
      <div className={styles.counter}>
        <span>{this.state.count}</span>
        <div>
          <button onClick={this.increaseHandler}>+</button>
          <button onClick={this.decreaseHandler}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
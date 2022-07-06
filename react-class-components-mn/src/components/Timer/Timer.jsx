import React from "react";

import styles from './Timer.module.css';

class Timer extends React.Component {
  state = {
    isCounting: false,
    count: 0
  }

  componentDidMount(){
    const userCount = localStorage.getItem("timer");
    if(userCount){
      this.setState({count: Number(userCount)});
    }
  }

  componentDidUpdate(){
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount(){
    this.setState({isCounting: false});
    clearInterval(this.customInterval);
  }

  startTimer = () => {
    this.setState({isCounting: true})
    this.customInterval = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 2000)    
    console.log('Timer started');
  }

  stopTimer = () => {
    this.setState({isCounting: false});
    clearInterval(this.customInterval);
    console.log('Timer stoped');
  }

  resetTimer = () => {
    this.setState({isCounting: false, count: 0});
    clearInterval(this.customInterval);
    console.log('Timer was reset');
  }


  render(){
    return (
      <div className={styles.timer}>
        <h2>React Timer</h2>
        <span>{this.state.count}</span>
        <div>
          {!this.state.isCounting ?
          ( <button onClick={this.startTimer}>Start</button>) :
          (<button onClick={this.stopTimer}>Stop</button>)}
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
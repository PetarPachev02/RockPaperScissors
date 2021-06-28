import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

export default class BattleRoom extends Component {
  static propTypes = {
    playerOption: PropTypes.string.isRequired,
    computerOption: PropTypes.string.isRequired,
  }

  state = {
    message: ''
  }
  
  componentDidMount(){
    const { playerOption , computerOption } = this.props
    if (playerOption === computerOption) {
      this.setState({
        message: "It's a draw."
      })
    } else if (
      (playerOption === "rock" && computerOption === "scissors") ||
      (playerOption === "scissors" && computerOption === "paper") ||
      (playerOption === "paper" && computerOption === "rock")
    ) {
      this.setState({
        message : "You win!"
      })    
    } else {
      this.setState({
        message: "You lost!"
      })  
    }
  }
   
  render() {
    return (
      <Fragment>
        <h2>{this.state.message}</h2>
        <br></br>
        <img
          width = "150px"
          height = "150px"
          src={
              this.props.playerOption === "rock" ? rock : 
              this.props.playerOption === "scissors" ? scissors : paper 
          }
          alt="Your option">
        </img>
        <img
          width = "150px"
          height = "150px"
          src={
              this.props.computerOption === "rock" ? rock : 
              this.props.computerOption === "scissors" ? scissors : paper 
          }
          alt="Computer option"> 
        </img>
        <br></br>
        <br></br>
        <a href="/">
            <button 
              type="button" 
              className="btn btn-primary"
              >New Game
              </button>
        </a>
      </Fragment>
    );
  }
}

  



 


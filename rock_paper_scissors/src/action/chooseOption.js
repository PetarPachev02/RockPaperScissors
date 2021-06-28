import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import {Link} from 'react-router-dom'

export default class ChooseOption extends Component {
    static propTypes = {
        chooseOption: PropTypes.func.isRequired,
        playerOption: PropTypes.string.isRequired
    }

    render() {
        return (
            <Fragment>
                <Link to='/battle/'>
                    <button 
                        type="button" 
                        className="startGameButton btn btn-primary"
                        >Start Game
                    </button>
                </Link>

                <h3>Choose your fighter</h3>
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

                <br></br>
                <br></br>

                <button 
                    type="button" 
                    className="optionButton btn btn-danger"
                    onClick = {() => this.props.chooseOption("rock")}
                    >Rock
                </button>

                <button 
                    type="button" 
                    className="optionButton btn btn-warning"
                    onClick= {() => this.props.chooseOption("paper")}
                    >Paper
                </button>

                <button 
                    type="button" 
                    className="btn btn-info"
                    onClick= {() => this.props.chooseOption("scissors")}
                    >Scissors
                </button>
                
                <a href="/rules/">
                    <button type="button" className="btn btn-outline-light">Check Rules</button>
                </a>
          </Fragment>
        );
    }
}


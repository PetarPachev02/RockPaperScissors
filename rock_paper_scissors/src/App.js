import React,  {Component, Fragment} from 'react'
import GameRules from './action/gameRules'
import ChooseOption from './action/chooseOption'
import BattleRoom from './action/battleRoom'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import 'bootswatch/dist/vapor/bootstrap.min.css'
import './App.css'

const options = ['rock', 'paper', 'scissors']

class App extends Component {
  state = {
    playerOption: options[0],
    computerOption: options[Math.floor(Math.random() * options.length)],
  }

  chooseOption = option => {
    this.setState ({  
        playerOption: option,
    })  
  }

  render(){
    return(
      <Fragment>
        <div className="container">

          <div className="header">
            <h1>Rock Paper Scissors</h1>
            <br></br>
            <h3>The place for the frequent game players</h3>
          </div>

          <div className="content">
            <Router>
              <Switch>
                <Route exact path ='/' 
                      render = {(props) => (<ChooseOption chooseOption={this.chooseOption} 
                                                        playerOption={this.state.playerOption}/>)} />
                <Route exact path ='/battle/' 
                      render = {(props) => (<BattleRoom playerOption={this.state.playerOption} 
                                                      computerOption={this.state.computerOption} />)} />
                <Route exact path ='/rules/' component={GameRules} />             
              </Switch> 
            </Router>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;

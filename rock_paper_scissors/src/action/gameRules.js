import React, {Component, Fragment} from 'react'
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

export default class GameRules extends Component {
  render() {
    return (
        <Fragment>
            <img src={rock} width="125px" height="125px" alt="rules"></img>

            <br></br>
            
            <img src={scissors} width="125px" height="125px" alt="rules"></img>
            <img src={paper} width="125px" height="125px" alt="rules"></img>

            <br></br>
            <br></br>

            <h4>Rock wins against scissors.</h4>
            <h4>Paper wins against rock.</h4>
            <h4>Scissors win against paper.</h4>

            <br></br>

            <a href="/">
                <button class="btn btn-primary" type="button">Go Back</button>
            </a>
            
        </Fragment>
    );
  }
}




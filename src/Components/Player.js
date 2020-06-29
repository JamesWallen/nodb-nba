// Player=Grass

import React, {Component} from 'react';

class Player extends Component {
    handlePick = () => {
        const {players} = this.props;
        let newPlayer = {
            name: players.name,
        }

        this.props.pickFn(newPlayer);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handlePick}>
                <p>{this.props.players.name}</p>
            </div>
        )
    }
}

export default Player;
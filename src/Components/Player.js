// Player=Grass

import React, {Component} from 'react';

class Player extends Component {
    handlePick = () => {
        console.log(this.props)
        const {player} = this.props;
        let newPlayer = {
            name: player.name,
        }

        this.props.pickFn(newPlayer);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handlePick}>
                <p>{this.props.player.name}</p>
            </div>
        )
    }
}

export default Player;
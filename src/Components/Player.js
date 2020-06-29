// Player=Grass

import React, {Component} from 'react';

class Player extends Component {
    handlePick = () => {
        console.log(this.props)
        const {player} = this.props;
        let newPlayer = {
            name: player.name,
            img: player.img,
        }

        this.props.pickFn(newPlayer);
        this.props.refreshFn();
    }

    render(){
        return (
            <div onClick={this.handlePick}>
                <img src={this.props.player.img}/>
                <p>{this.props.player.name}</p>
            </div>
        )
    }
}

export default Player;
//edit= pokedex.js

import React from 'react';
import Edit  from './Edit';

const Team = props => {
    const mappedPlayers = props.players.map((players, i) => (
        <Edit
            key={i}
            players={players}
            nameFn={props.nameFN}
            releaseFn={props.releaseFn}/>
    ))

    return (
        <div>
            <h1>All-Stat Team</h1>
            <div className='player-flex'>
                {mappedPlayers}
            </div>
        </div>
    )
}

export default Team;
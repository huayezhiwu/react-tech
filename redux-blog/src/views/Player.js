import React from 'react';
import PlayerApi from '../../api/player';
import { Link } from 'react-router-dom';

const Player = (props) => {

    const player = PlayerApi.get(parseInt(props.match.params.number, 10));
    console.log(player)

    if(!player){
        return <p>Sorry, but the player was not found.</p>
    }
    return (
        <div>
            <h3>Name:{player.name}</h3>
            <p>Number:{player.number}</p>
            <p>Position: {player.position}</p>
            <Link to="/detail" >Back1</Link>
        </div>
    )
}

export default Player;


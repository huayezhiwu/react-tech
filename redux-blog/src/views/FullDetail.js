import React from 'react';
import PlayerApi from '../../api/player';
import { Link } from 'react-router-dom';
import Player from './Player';

const FullDetail = () => {
    

    return (
        <div>
            <ul>
                
                {
                    PlayerApi.all().map( p => (
                        <li key={p.number}>
                            <Link to={`/detail/${p.number}`}>{p.name}</Link>
                        </li>
                    ))

                }
            </ul>
        </div>
    )
    
}

export default FullDetail;


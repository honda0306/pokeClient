import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return (
        <div className='viewContainer'>
            <h3 className="viewHeader">Who's that Pokemon?</h3>
            <div className='collection'>
                {props.pokemon.map(pokemon => (
                    <div onClick={() => props.selectPokemon(pokemon.name)} key={pokemon.name} className='noteContainer'>
                        <Link to={`/${pokemon.name}`} className='pokemonLink'>
                            <div className='card'>
                                <h4 className='title'>{pokemon.name}</h4>
                                <h4 className='url'>{pokemon.url}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListView;
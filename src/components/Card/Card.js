import React from 'react';
import typeColors from '../../helpers/pokemonTypes';
import './style.css';





function Card({ pokemon, shiny }) {
    const image = shiny ? pokemon.sprites.versions["generation-v"]["black-white"].animated.front_shiny : pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default

    
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={image} alt="" id="pokemonVersion" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
               {pokemon.types.map(type => {
                   return (
                       <div className="Card__type" style={{backgroundColor: typeColors[type.type.name]}}>
                           {type.type.name}
                       </div>
                   )

               })} 
            </div>
            <div ClassName='Card__info'>
               <div className="Card__data Card_data--weight">
                   <p className="title">Weight</p>
                   <p>{pokemon.weight}</p>
               </div>
               <div className="Card__data Card_data--height">
                   <p className="title">Height</p>
                   <p>{pokemon.height}</p>
               </div>
            </div>
            <div className="Card__data Card_data--ability">
                   <p className="title">Ability</p>
                   <p>{pokemon.abilities[0].ability.name}</p>
               </div>

        </div>
    );
}

export default Card;
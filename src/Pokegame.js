import Pokedex from './Pokedex';

let pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function Pokegame(){
let   nums1 = [];
let nums2 = [];
let list1 = [];
let list2 = [];
let total1=0;
let total2=0;
    for(let i=0; i<4; i++){
        nums1.push(Math.floor(Math.random() * 8));
        nums2.push(Math.floor(Math.random() * 8));
    }
    nums1.map((i)=>{
        list1.push(pokemons[i]);
        total1 += pokemons[i].base_experience;
    });
    
    nums2.map((i)=>{
        list2.push(pokemons[i]);
        total2 += pokemons[i].base_experience;
    });
    
    return(

        <div className='poke-game'>
            {console.log(nums1)}
            {console.log(nums2)}
            <Pokedex poke={list1} points={total1} status={total1>total2?"Winner!":"Looser"}/>
            <Pokedex poke={list2} points={total2} status={total2>total1?"Winner!":"Looser"}/>
        </div>
    )
}

export default Pokegame;
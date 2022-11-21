import Pokecard from './Pokecard';
import './Pokedex.css';

let pokemons;
let points, status;
function Pokedex(props) {
    pokemons = props.poke;
    points = props.points;
    status = props.status;
    return (
        
        <div className="pokedex-card">
            <h1>Total Points: {points}</h1>
            <h2 className={status==='Winner!'?'win':'loo'}>{status}</h2>
            {
                pokemons.map(
                    (p,index) => {
                        return (
                            <Pokecard key={index}
                                name={p.name}
                                type={p.type}
                                imgId={p.id}
                                exp={p.base_experience}
                            />
                        )
                    }
                )
            }
        </div>
    )
}

export default Pokedex;
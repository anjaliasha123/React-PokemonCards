import './pokecard.css';

function paddedNum(id){
    if(id < 10){
        return '00'+id;
    }
    if(id<100){
        return '0'+id;
    }
    return ''+id
    
}
function Pokecard(props){

    let name,type,img, exp, id;
    name = props.name;
    // id = props.imgId;
    id = paddedNum(props.imgId)
    type = props.type;
    img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+id+".png";
    // img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png";
    exp = props.exp;
    return (
        <div className="poke-card">
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <p>Type: {type}</p>
            <p>EXP: {exp}</p>
        </div>
    )
}

export default Pokecard;
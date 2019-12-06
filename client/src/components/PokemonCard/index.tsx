import * as React from 'react';
import { connect } from 'react-redux';
import attackStatImg from "../../images/pokemon-stats/Attack.png"
import specialAttackStatImg from "../../images/pokemon-stats/Special-Attack.png"
import speedStatImg from "../../images/pokemon-stats/Speed.png"
import defenseStatImg from "../../images/pokemon-stats/Defense.png"
import specialDefenseStatImg from "../../images/pokemon-stats/Special-Defense.png"
import "./Style.css"
class PokemonCard extends React.Component<any, any> {
    state = {}
    render() {
        const { stats, pokemonImages, level, name } = this.props.pokemon
        const { hp, speed, attack, defense, specialAttack, specialDefense } = stats
        const { front } = pokemonImages
        return (<div>
            <div className="pokemonCard">
                <h5 style={{ position: "relative", top: "8px" }} ><img src={defenseStatImg} height="20px" width="15px" alt="" /></h5>
                <div className="card-body">
                    <h5 className="capitalize"><b>{name}</b></h5>
                    <img style={{ position: "relative", top: "-30px" }} src={front} height="150px" width="150px" alt="" />
                    <div style={{ position: "relative", top: "-30px" }}>
                        <h5 style={{ position: "relative", top: "-20px" }}>Level {level}</h5>
                        <span className="stats" title="Hp">{`❤️ ${hp}`}</span>
                        <span className="stats" title="Speed"><img src={speedStatImg} height="20px" width="15px" alt="" /> {speed} </span>
                        <br />
                        <span className="stats" title="Attack"><img src={attackStatImg} height="20px" width="15px" alt="" /> {attack}</span>
                        <span className="stats" title="Defense"><img src={defenseStatImg} height="20px" width="15px" alt="" /> {defense}</span>
                        <br />
                        <span className="stats" title="Special Attack"><img src={specialAttackStatImg} height="20px" width="20px" alt="" /> {specialAttack}</span>
                        <span className="stats" title="Special Defense"><img src={specialDefenseStatImg} height="20px" width="15px" alt="" /> {specialDefense}</span>
                        <br />
                    </div>

                    <button type="button" className="btn btn-secondary">More Info</button>
                </div>
            </div>
        </div>);
    }
}

export default PokemonCard;
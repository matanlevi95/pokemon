import React from 'react';
import Header from "../Header"
import { connect } from 'react-redux';
import PokemonCard from '../PokemonCard';
import "./Style.css"


class MyPokemons extends React.Component<any, any> {
    state = {}

    componentDidMount() {

    }

    render() {
        const user = JSON.parse(localStorage.getItem("state") || "")
        const { pokemons } = user

        return (<div>
            
            <Header title="My Pokemons" />
            <br/>
            {pokemons.map((pokemon: any) => {
                return (
                    <div className="cards"> <PokemonCard pokemon={pokemon} /> </div>
                )
            })}
        </div>);
    }
    cardBackgroundColor = (type: any) => {
        switch (type) {
            case "water": {
                return "blue"
            }
            case "fire": {
                return "red"
            }
            case "grass": {
                return "green"
            }
            default: {
                return "white"
            }
        }
    }
}


const mapStateToProps = (state: any) => {
    const { pokemons } = state.userLoginDetails
    console.log(pokemons);

    return {
        pokemons
    }
}



export default connect(mapStateToProps, null)(MyPokemons);
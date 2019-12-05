import React from 'react';
import Header from "../Header"
import { connect } from 'react-redux';

class MyPokemons extends React.Component<any, any> {
    state = {}

    componentDidMount() {

    }

    render() {
        const { pokemons } = this.props
        return (<div>
            <Header title="My Pokemons" />
            {pokemons.map((pokemon: any) => {
                return pokemon.name
            })}
        </div>);
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
const axios = require("axios");


async function getPokemonDetails(pokemon) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        let { data } = await axios.get(url)

        const { stats, sprites, types, species } = data
        const { back_default: back, front_default: front } = sprites
        const pokemonStatsDetails = {}
        const array = ["speed", "specialDefense", "specialAttack", "defense", "attack", "hp"]
        const pokemonImages = { back, front }
        let counter = 0
        stats.map(s => {
            const { stat, base_stat } = s
            pokemonStatsDetails[array[counter]] = base_stat
            counter++
        })
        const pokemonsTypes = types.map(t => {
            return t.type.name
        })
        const pokemonRelevantInfo = { name: species.name, level: 1, exp: { currentExp: 0, maxExp: 50 }, stats: pokemonStatsDetails, pokemonImages, pokemonsTypes }
        console.log(pokemonRelevantInfo);

        return pokemonRelevantInfo
    }
    catch (err) {
        console.log(err);

    }
}
getPokemonDetails("ditto")
module.exports = getPokemonDetails
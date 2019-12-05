const Pokedex = require("pokedex")
const pokedex = new Pokedex()
const data = require("../json/pokedex")
const fs = require("fs")

console.log(pokedex.pokemon(7));

function createPokedex() {
    for (let index = 1; index <= 807; index++) {
        const pokemon = pokedex.pokemon(index)
        const { name, sprites } = pokemon
        const { normal } = sprites
        data[name] = normal
    }
    fs.writeFile("./json/pokedex.json", JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("data saved");

        }
    })
}
createPokedex()
const express = require("express")
const router = express.Router()
const users = require("../json/users.json")
const writeToJson = require("../utils/writeToJson")
const getPokemonDetails = require("../utils/getPokemonDetails")

router.post("/register", async (req, res, next) => {
    const { username, password, email, starterPokemon } = req.body
    const pokemon = await getPokemonDetails(starterPokemon)
    const pokemons = []
    pokemons.push(pokemon)
    const coins = 100
    const level = 1
    const stamina = { currentStamina: 50, maxStamina: 50 }
    const exp = { currentExp: 0, maxExp: 50 }
    const { data } = users
    const user = { username, email, password, pokemons, coins, level, stamina, exp }
    const found = data.find(user => {
        if (email === user.email || username === user.username) {
            return user
        }
    })
    if (!found) {
        data.push(user)
        writeToJson("./json/users.json", users)
        res.json({ messege: "register successfully", redirect: true })
    }
    else {
        res.json({ messege: "users already exists", redirect: false })
    }

})

router.post("/login", (req, res, next) => {
    const { username, password } = req.body
    const { data } = users

    const user = data.find(u => {
        if (username === u.username && password === u.password) {
            return u
        }
    })
    if (user) {
        const { coins, level, stamina, exp, pokemons } = user
        const token = ""
        res.json({ messege: "login successfully", redirect: true, token, username, coins, level, stamina, exp, pokemons })
    }
    else {
        res.json({ messege: "username or password are incorrect", redirect: false, token: "", username: "", coins: 0, level: 0, stamina: "", exp: "", pokemons: [] })
    }
})
module.exports = router
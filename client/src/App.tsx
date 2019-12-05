import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from './components/Register';
import Login from './components/Login';
import MyPokemons from './components/MyPokemons';
import Shop from './components/Shop';
import Pokeballs from './components/Items/Pokeballs';
import Materials from './components/Items/Materials';
import Pokedex from './components/Pokedex';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/myPokemons" component={MyPokemons} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/items/pokeballs" component={Pokeballs} />
        <Route exact path="/items/materials" component={Materials} />
        <Route exact path="/pokedex" component={Pokedex} />
      </BrowserRouter>
    </div>
  );
}

export default App;

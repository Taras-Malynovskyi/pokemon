import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/form";
import Pokemon from "./components/pokemon";
import Data from "./components/data";


class App extends React.Component {

  state = {
    name: undefined,
    id: undefined,
    attack: undefined,
    defense: undefined,
    hp: undefined,
    sp_attack: undefined,
    sp_defense: undefined,
    speed: undefined,
    type: undefined,
    weight: undefined,
    total_moves: undefined
  }
  gettingPokemon = async (e) => {
    e.preventDefault();
    const pokename = e.target.elements.name.value;
    const api_url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      name: data.name,
      id: data.id,
      type: data.types["0"].type.name,
      attack: data.stats["4"].base_stat,
      defense: data.stats["3"].base_stat,
      hp: data.stats["5"].base_stat,
      sp_attack: data.stats["2"].base_stat,
      sp_defense: data.stats["1"].base_stat,
      speed: data.stats["0"].base_stat,
      weight: data.weight,
      total_moves: data.moves.length
    });

  }


  render() {

    return (
      <div className="parent ">
        <div className="pokedex">
          <p>Pokedex</p>
        </div>
        <div className="App">
          <div className="row" >
            <div className="first" className="col-md-8">
              <div  >
                <Form />
              </div>
              {/* <div>
              <Data/>
              </div> */}
             

            </div>

            <div className="second" className="col-md-4">
              <Pokemon
                pokemonMethod={this.gettingPokemon}
                name={this.state.name}
                id={this.state.id}
                type={this.state.type}
                attack={this.state.attack}
                defense={this.state.defense}
                hp={this.state.hp}
                sp_attack={this.state.sp_attack}
                sp_defense={this.state.sp_defense}
                speed={this.state.speed}
                weight={this.state.weight}
                total_moves={this.state.total_moves}
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

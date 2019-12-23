import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 12,
      isLoaded: false,
      items: [],
      pokeName: [],
    }
  }
  componentDidMount() {
    this.gettingPokemon();
    this.gettingPokemon1();
  }

  gettingPokemon = async () => {
    for (let i = 1; i < this.state.number; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            pokeName: json,
            isLoaded: true,
          });
          console.log(this.state.pokeName)
          // console.log(this.state.pokeName.name, this.state.pokeName.id )
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  gettingPokemon1 = async () => {
    fetch(`http://pokeapi.co/api/v2/pokemon/?limit=${this.state.number}`)
      .then(res => res.json())
      .then(json => {
        this.setState({ items: json.results, })
        console.log(this.state.items)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, pokeName, items } = this.state;

    if (!isLoaded)
      return <div>Loading...</div>;
    return (
      <div className="form" >
        {items.map(item => (
            <div className="card" className="form_item"  >
              <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + item.url.split('/')[6] + `.png`} />
              <div className="card-body">
                <h3 className="card-title"> {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                <a href="#" className="btn btn-primary">
                 
                    <p>
                      {pokeName.height}
                    </p>

                  
                  </a>
              </div>
            </div>
        ))}

      </div>
    );
  }
}
export default Form;
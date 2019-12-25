import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: 12,
      isLoaded: false,
      items: [],
    };

    this.loadMore = this.loadMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.gettingPokemon();
  }
  //load more items
  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 8 };
    });
    console.log(this.state.visible);
  }

// get 200 pokemons
  gettingPokemon = async () => {
    fetch(`http://pokeapi.co/api/v2/pokemon/?limit=200`)
      .then(res => res.json())
      .then(json => {
        this.setState({ items: json.results, isLoaded: true, })
        console.log(this.state.items)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // return id checked element
  handleClick({ currentTarget }) {
    console.log(currentTarget.id)
    this.props.updateData(currentTarget.id);
  }



  render() {
    if (this.state.isLoaded === false)
      return <div>Loading...</div>;
    return (
      <div  >

        <div className="form">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
            return (
              <div className="card" className="form_item" key={index + 1} id={index + 1}
                onClick={this.handleClick}
              >
                <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + item.url.split('/')[6] + `.png`} />
                <div className="card-body">
                  <h3 className="card-title"> {item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                </div>
              </div>

            );
          })}
        </div>

        <div className="form">
          <button onClick={this.loadMore} type="button" className="btn btn-primary btn-lg btn-block load_more" >Load more</button>
        </div>

      </div>
    );
  }
}
export default Form;




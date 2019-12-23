import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }

  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => res.json())
      .then(json => {
        this.setState({ items: json, isLoaded: true, })
        console.log(this.state);
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {

    const { isLoaded, items } = this.state;
    if (!isLoaded)
      return <div>Loading...</div>;
    return (
      <div className="Form">
        <ul>
          {items.results.map(item => (
            <li key={item.id}>
              Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Form;





// class Data extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           data: []
//       };
//   }

//   componentDidMount() {
//       this.loadData()
//   }

//   // Fetch data from API:
//   loadData() {
//       fetch('https://pokeapi.co/api/v2/pokemon/')
//           .then(result => result.json())
//           .then(items => this.setState({ data: items }))
//   }

//   render() {

//       const mapToComponents = data => {
//           // Your logic...
//           // Here you can use data...
//       };

//       return (
//           <div className className="form">
             
//                   {this.state.data.results !== undefined ?
//                       this.state.data.results.map((x, i) =>
//                           <div className="form">
//                               <div className="card" className="form_item"  >
//                                   <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + x.url.split('/')[6] + `.png`} />
//                                   <div className="card-body">
//                                       <h3 className="card-title"> {x.name.charAt(0).toUpperCase() + x.name.slice(1)}</h3>
//                                       <a href="#" className="btn btn-primary">Get</a>
//                                   </div>
//                               </div>
//                           </div>
//                       )
//                       : <li>Loading...</li>
//                   }
             

//           </div>
//       );
//   }
// }
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Pokemon extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.props.pokemonMethod}>
                        <input type="text" name="name" placeholder="name" />
                        <button>get</button>
                    </form>
                </div>
                <div>
                    <p>Name: {this.props.name}</p>
                    <p>Id: {this.props.id}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Attack: {this.props.attack}</p>
                    <p>Defense: {this.props.defense}</p>
                    <p>HP: {this.props.hp}</p>
                    <p>Sp Attack: {this.props.sp_attack}</p>
                    <p>Sp Defense: {this.props.sp_defense}</p>
                    <p>Speed: {this.props.speed}</p>
                    <p>Weight: {this.props.weight}</p>
                    <p>Total_moves: {this.props.total_moves}</p>
                </div>
            </div>
        );
    }
}
export default Pokemon;
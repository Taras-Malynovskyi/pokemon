import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';
class Pokemon extends React.Component {
    render() {
        return (
            <div >
                <div className="form-item">
                    <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + this.props.id + `.png`} />

                    <div className="table-responsive">
                        <table className="table-bordered table ">
                            
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td> {this.props.name}</td>
                                </tr>
                                <tr>
                                    <td>Id:</td>
                                    <td> {this.props.id}</td>
                                </tr>
                                <tr>
                                    <td>Type:</td>
                                    <td> {this.props.type} </td>
                                </tr>
                                <tr>
                                    <td>Attack: </td>
                                    <td> {this.props.attack}</td>
                                </tr>
                                <tr>
                                    <td>Defense: </td>
                                    <td> {this.props.defense}</td>
                                </tr>
                                <tr>
                                    <td>HP:</td>
                                    <td> {this.props.hp}</td>
                                </tr>
                                <tr>
                                    <td>Sp Attack: </td>
                                    <td> {this.props.sp_attack}</td>
                                </tr>
                                <tr>
                                    <td>Sp Defense: </td>
                                    <td>{this.props.sp_defense}</td>
                                </tr>
                                <tr>
                                    <td>Speed:</td>
                                    <td>{this.props.speed}</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>{this.props.weight}</td>
                                </tr>
                                <tr>
                                    <td>Total_moves: </td>
                                    <td> {this.props.total_moves}</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        );
    }
}
export default Pokemon;
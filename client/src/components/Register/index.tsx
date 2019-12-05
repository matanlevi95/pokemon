import React from 'react';
import Header from '../Header';
import './Style.css';
import { connect } from "react-redux"
import { register } from "../../redux/actions"


class Register extends React.Component<any, any> {
    state = {
        username: "",
        email: "",
        password: "",
        starterPokemon: ""
    }
    handleCheck = (e: any) => {
        const { value } = e.target
        this.setState({ starterPokemon: value })
    }
    handleRegister = () => {
        const { register } = this.props.actions
        register(this.state)
    }
    handleChange = (e: any) => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }
    componentDidUpdate() {
        const { redirect, history } = this.props
        if (redirect) {
            history.push("/")
        }
    }
    render() {
        return (<div className="RegisterDiv">
            <Header title="Register" />
            <form>
                <div className="form-group form-group col-md-6" style={{ position: "relative", left: "120px" }}>
                    <label><b> Username :</b></label>
                    <input type="email" name="username" className="form-control" onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group form-group col-md-6" style={{ position: "relative", left: "120px" }}>
                    <label><b> Email :</b> </label>
                    <input type="email" name="email" id="exampleInputEmail1" onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group form-group col-md-6" style={{ position: "relative", left: "120px" }}>
                    <label><b> Password :</b></label>
                    <input type="password" name="password" className="form-control" onChange={this.handleChange} id="exampleInputPassword1" />
                </div>
                <div style={{ display: "block" }}>
                    <h4 style={{ background: "red" }}>Choose Your starter pokemon</h4>
                    <br />
                    <span><img height="100" width="150" src="https://projectpokemon.org/home/gallery/image/78484-squirtlepng/?do=download" alt="File not found" /></span>
                    <input type="radio" value="squirtle" onClick={this.handleCheck} name="pokemon" />
                    <span> <img height="100" width="150" src="https://projectpokemon.org/home/uploads/monthly_2019_06/large.charmander.png.23f59a100b425bb78d79995e290b0da3.png" alt="File not found" /></span>
                    <input type="radio" value="charmander" onClick={this.handleCheck} name="pokemon" />
                    <span><img height="100" width="150" src="https://projectpokemon.org/home/uploads/monthly_2019_06/large.bulbasaur.png.f765693a113acd1e064ab4eb8bf10f6f.png" alt="File not found" /></span>
                    <input type="radio" name="pokemon" onClick={this.handleCheck} value="bulbazaur" />
                </div>
                <br />
                <button style={{ margin: "10px" }} onClick={this.handleRegister} type="button" className="btn btn-danger">Get Started</button>
            </form>
        </div>);
    }
}
const mapStateToProps = (state: any) => {
    const { redirect } = state.userRegisterDetails
    return { redirect }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            register: (user: any) => dispatch(register(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
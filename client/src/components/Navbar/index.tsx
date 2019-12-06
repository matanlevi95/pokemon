import * as React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { login, logout } from "../../redux/actions"
import "./Style.css"
import { Tooltip } from "@material-ui/core"

class Navbar extends Component<any, any> {
    state = {
        username: "",
        password: "",
    }
    handleChange = (e: any) => {
        const { name, value } = e.target
        this.setState({ ...this.state, [name]: value })
    }
    handleLogin = () => {
        const { username, password } = this.state
        const { login } = this.props.actions
        login({ username, password })

    }

    render() {
        const state = JSON.parse(localStorage.getItem("state") || "")

        const { redirect, coins, level, stamina, exp } = state
        if (redirect) {
            return (

                <div>
                    <nav className="navbar navbar-expand-lg navbar-danger" style={{ background: "#c7ecee" }}>
                        <span className="navbar-brand"><img height="40px" width="100px" src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="" /></span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img height="40px" width="40px" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <button className="btn "><Link style={{ color: "#2d3436" }} to="/">Home</Link></button>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className=" btn" style={{ color: "#2d3436" }} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Items </button>
                                    <div className="dropdown-menu" style={{ background: "#c7ecee", position: "absolute", border: "none" }} aria-labelledby="navbarDropdown">
                                        <button className="btn "><Link style={{ color: "#2d3436" }} to="/items/pokeballs">Pokeballs</Link></button>
                                        <button className="btn "><Link style={{ color: "#2d3436" }} to="/items/materials">Materials</Link></button>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button className="btn "><Link style={{ color: "#2d3436" }} to="/myPokemons">My Pokemons</Link></button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn "><Link style={{ color: "#2d3436" }} to="/pokedex">Pokedex</Link></button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn "><Link style={{ color: "#2d3436" }} to="/shop">Shop</Link></button>
                                </li>

                            </ul>
                            <img height="30px" width="30px" src="https://icon-library.net/images/lightning-icon-png/lightning-icon-png-4.jpg" alt="" />
                            <span>  {stamina.currentStamina}/{stamina.maxStamina} </span>
                            <Tooltip style={{ color: "red" }}
                                title={`${exp.currentExp}/${exp.maxExp}`} arrow>

                                <span style={{ marginRight: "15px", marginLeft: "15px", paddingLeft: "10px", borderLeft: "1px solid black" }}> Level {level}</span>
                            </Tooltip>
                            <img style={{ borderLeft: "1px black solid", paddingLeft: "10px" }} height="23px" width="27px" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/coin-us-dollar-icon.png" alt="" />
                            <span style={{ marginLeft: "5px" }}>{` X${coins} `}</span>
                            <button type="button" className="btn " style={{ color: "#2d3436", border: "1px solid black", marginLeft: "20px" }} onClick={() => {
                                const { logout } = this.props.actions
                                logout()
                            }}>Logout</button>
                        </div>
                    </nav>
                </div >

            )
        }
        else {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-danger" style={{ background: "#c7ecee" }}>
                        <span className=""><img height="40px" width="100px" src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt="" /></span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img height="40px" width="40px" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" name="username" onChange={this.handleChange} placeholder="Username" aria-label="Username" />
                                <input className="form-control mr-sm-2" type="password" name="password" onChange={this.handleChange} placeholder="Password" aria-label="Search" />
                                <button className="btn" style={{ background: "#2d3436", color: "#f1f1f1", border: "1px" }} onClick={this.handleLogin} type="button">Login</button>
                                <button className="btn "><Link style={{ color: "#2d3436" }} to="/register">Dont have an account?</Link></button>
                            </form>
                        </div>
                    </nav>
                </div>);
        }
    }

}


const mapStateToProps = (state: any) => {
    const { userLoginDetails } = state

    return { userLoginDetails }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            login: (user: any) => dispatch(login(user)),
            logout: () => dispatch(logout())

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)
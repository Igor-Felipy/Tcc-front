import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";
// eslint-disable-next-line 
import { Form, Container } from "./styles";
import api from "../../services/api";

import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';

class SignUp extends Component {
    state = {
        email: "",
        nickname: "",
        name: "",
        birth:"",
        password:"",
        error:""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { email, nickname, name, birth, password } = this.state;
        if(!nickname || !email || !password || !name || !birth) {
            this.setState({ error: "Preencha todos os dados para se cadastrar!"})
        } else {
            try {
                await api.post("/users", { nickname, email, password, name, birth });
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta."});
            }
        }
    };

    render(){
        return (
            <TotalWrapper>
                <SuperiorBar PageName="Register" ReturnButton="True" SearchButton="" ReturnURL="/login" />
                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="Airbnb logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nickname"
                        onChange={e => this.setState({ nickname: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Data de Nascimento"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="senha"
                        onChange={e => this.setState({ nickname: e.target.value })}
                    />
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer Login</Link>
                </Form>
            </TotalWrapper>
        );
    } 
}

export default withRouter(SignUp);
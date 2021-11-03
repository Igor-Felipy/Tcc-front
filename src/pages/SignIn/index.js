import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";
import api from "../../services/api";
import { login } from "../../services/auth";
import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';
// eslint-disable-next-line
import { Form, Container} from "./styles";


class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!"});
        } else {
            try {
                const response = await api.post("/auth/login", { email, password });
                login(response.data.token);
                this.props.history.push("/app");
            } catch (err) {
                this.setState({
                    error:
                    "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    };

  render() {
    return (
      <TotalWrapper>
        <SuperiorBar />
        <Form onSubmit={this.handleSignIn}>
            <img src={Logo} alt="JustFeeling Logo" />
            {this.state.error && <p>{this.state.error}</p>}
            <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={e => this.setState({ password: e.target.value })}
            />
            <input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Entrar</button>
            <hr />
            <Link to="/Signup">Criar conta</Link>
        </Form>
      </TotalWrapper>
    );
  }
}

export default withRouter(SignIn);
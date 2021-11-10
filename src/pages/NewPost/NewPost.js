import SuperiorBar from '../components/SuperiorBar';
import TotalWrapper from '../components/TotalWrapper';
import React, { Component } from 'react';
import { Form } from './styles'

import api from "../../services/api";

class NewPost extends Component{
    state = {
        caption:"",
        image:"",
        error: ""
    };

    HandleNewPost = async e => {
        e.preventDefault();
        const { caption, image } = this.state;
        if (!image || !caption) {
            this.setState({ error: "Preencha os campos para continuar!"});
        } else {
            try{
                await api.post("/post/new_post", { image, caption });
                this.props.history.push("/");
            } catch (err) {
                this.setState({
                    error:
                    "Ocorreu um erro inesperado, tente novamente mais tarde!"
                });
            }
        }
    }

    render() {
        return(
            <TotalWrapper>
                <SuperiorBar PageName="New Post" ReturnButton="True" SearchButton="True" ReturnURL="/" />
                <Form onSubmit={this.HandleNewPost}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                    type="text"
                    placeholder="Legenda"
                    onChange={e => this.setState({ caption: e.target.value })}
                    />
                    <input
                    type="text"
                    placeholder="Image link"
                    onChange={e => this.setState({ image: e.target.value })}
                    />
                    <button type="submit">Criar Post</button>
                </Form>
            </TotalWrapper>
        );
    }
}

export default NewPost;
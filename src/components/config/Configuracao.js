import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

import { FormControl } from '../index';

class Configuracao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            username: '',
            urlFoto: ''
        };
    }

    handleChange = event => {
        console.log('Handle change')
    }

    handleSalvar = event => {
        console.log('handle salvar');
    }

    render() {

        return (
            <Form>
                <Col sm={12}>
                    <FormControl
                        id="inputNome"
                        label="Nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                    />
                </Col>

                <Col sm={12}>
                    <FormControl
                        id="inputUsername"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </Col>

                <Col sm={12}>
                    <FormControl
                        id="inputUrlFoto"
                        label="URL Foto"
                        value={this.state.urlFoto}
                        onChange={this.handleChange}
                    />
                </Col>

                <Col sm={12}>
                    <Button variant="primary" type="submit" onClick={this.handleSalvar}>
                        Salvar
                    </Button>
                </Col>
            </Form>
        )
    }
}

export default Configuracao;
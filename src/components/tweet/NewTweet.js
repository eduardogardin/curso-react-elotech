import React, { Component } from 'react';
import { InputGroup, FormControl, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';

class NewTweet extends Component {

    handleTweet = () => {
        console.log('Handle tweet');
    }

    render() {
        return (
            <Row className="mt-4">
                <Col sm={10}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>O que ta pegando ?</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </Col>
                <Col sm={2}>
                    <ButtonToolbar>
                        <Button variant="primary" size="lg" block type="submit" onClick={this.handleTweet}>
                            Post!
                        </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        )
    }
}

export default NewTweet;
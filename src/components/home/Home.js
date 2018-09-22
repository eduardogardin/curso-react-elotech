import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import { NewTweet, Timeline } from '../index';

class Home extends Component {

    render() {

        return (
            <Container>                
                <NewTweet />            
                <Timeline />
            </Container>
        )
    }
}

export default Home;
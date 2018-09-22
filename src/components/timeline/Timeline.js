import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

const tweets = [
    {
        username: 'eduardo_gardin',
        created: Date.now(),
        text: 'Tweet de teste 1'
    },
    {
        username: 'eduardo_gardin',
        created: Date.now(),
        text: 'Tweet de teste 2'
    }
];

class Timeline extends Component {

    renderTweet = (tweet) => {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>                    
                    <Card.Text>{tweet.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <div className="mt-4">
                <h1>Timeline</h1>
                {tweets.map(this.renderTweet)}
            </div>
        )
    }
}

export default Timeline;
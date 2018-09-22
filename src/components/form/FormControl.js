import React from 'react';
import { Form } from 'react-bootstrap';

export const FormControl = (props) => {

    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type="text"
                value={props.value}
                onChange={props.onChange}
                {...props}
            />                        
        </Form.Group>
    )
}
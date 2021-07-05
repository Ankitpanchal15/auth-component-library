import React from 'react';
import {Container, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function HelloWorld() {
    return (
        <>
        <div className="p-5 text-center bg-info">
        <Container>
        <h1>This is Test components library</h1>
        <Button className="m-2">Button</Button>
        </Container>
        </div>
        </>
    )
     
}

export default HelloWorld;
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../images/illustration-phones.svg';

function Infrastructure({title,text}) {
    return (
        <div className="section-infraestructure">
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="img-structure">
                        <img src ={Image1}/>
                    </Col>
                    <Col md={6} className=" Infrastrucure-txt d-flex justify-content-center flex-column ">
                        <h2> {title} </h2>
                        <p> {text} </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Infrastructure;
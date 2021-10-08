import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../images/illustration-phones.svg';
function Infrastructure({Title}) {
    return (
        <div className="section-infraestructure">
               
               <Container className="h-100">
                    <Row className="h-100">
                        <Col md={6}  className="img-structure">
                            <img src ={Image1}/>
                        </Col>
                        <Col md={6} className=" Infrastrucure-txt d-flex justify-content-center flex-column ">
                            <h2> State of the Art Infrastructure </h2>
                            <p> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Infrastructure

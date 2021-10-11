import React from 'react'
import Image1 from '../images/illustration-laptop-desktop.svg';
import {Container, Row, Col } from 'react-bootstrap'
function Powerful({subtitle1,subtitle2,text1,text2}) {
    return (
        
        <div className="powerful-section">
            <Container className="h-100 d-flex flex-row align-items-center ">
                <Row>
                    <Col md={6}  className="image-powerfull">
                        <img src={Image1}/>
                    </Col>
                    <Col md={6} className="txt-article" >
                        <div className="introduce_article">
                            <h3 className="Powerful-article__title">{subtitle1}</h3>
                            <p className="Powerful-article__text">
                                {text1}
                            </p>
                        </div>
                        <div>
                            <h3 className="Powerful-article__title">{subtitle2}</h3>
                            <p className="Powerful-article__text">
                                {text2}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Powerful;
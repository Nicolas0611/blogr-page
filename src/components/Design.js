import React from 'react'
import Image1 from '../images/illustration-editor-desktop.svg';
import {Container,Row,Col} from 'react-bootstrap';

function Design({title,subtitle1,subtitle2,text1,text2}) { 
    return (
        <div className="design-section">
            <div className="txt-design text-center">
                <h2> {title}</h2>
            </div>
            <Container className="design-content d-flex flex-row">
                <Row>
                    <Col md={6} className="txt-article" >
                        <div className="introduce_article">
                            <h3 className="design-article__title">{subtitle1}</h3>
                            <p className="design-article__text"> {text1} </p>
                        </div>
                        <div>
                            <h3 className="design-article__title">{subtitle2}</h3>
                            <p className="design-article__text"> {text2} </p>
                        </div>
                    </Col>
                    <Col md={6} className="image-section">
                        <img src={Image1}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Design;
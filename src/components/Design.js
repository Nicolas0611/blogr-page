import React from 'react'
import Image1 from '../images/illustration-editor-desktop.svg';
import {Container,Row,Col} from 'react-bootstrap';
function Design({title,subtitle1,subtitle2}) {
    return (
        <div className="design-section">
            <div className=" txt-design text-center">
                <h2> {title}</h2>
            </div>
            <Container className="design-content d-flex flex-row">
                <Row>
                    <Col md={6} className="txt-article" >
                        <div className="introduce_article">
                            <h3 className="design-article__title">{subtitle1}</h3>
                            <p className="design-article__text">
                                Blogr features an exceedingly intuitive interface which lets you focus
                                on one thing: creating content. The editor supports management of
                                multiple blogs and allows easy manipulation of embeds such as images,
                                videos, and Markdown. Extensibility with plugins and themes provide
                                easy ways to add functionality or change the looks of a blog.
                            </p>
                        </div>
                        <div>
                            <h3 className="design-article__title">{subtitle2}</h3>
                            <p className="design-article__text">
                                Flexible content management enables users to easily move through
                                posts. Increase the usability of your blog by adding customized
                                categories, sections, format, or flow. With this functionality, you’re
                                in full control.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}  className="image-section">
                        <img src={Image1}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Design

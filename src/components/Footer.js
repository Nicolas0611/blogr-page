import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Logo from '../images/logo.svg';
function Footer() {

    const FooterLinks =[
        {
            title:"Product",
            link1:"Overview",
            link2:"Pricing",
            link3:"Marketplace",
            link4:"Features",
            link5:"Integrations"
        },
        {
            title:"Company",
            link1:"About",
            link2:"Team",
            link3:"Blog",
            link4:"Careers"
            
        },
        {
            title:"Connect",
            link1:"Contact",
            link2:"Newsletter",
            link3:"LinkedIn",

        }

    ]

    const renderFooterLinks = (links) =>
        links.map((link,index)=>
            <Col className="h-100" key={index} md={3}>
                <ul className="list-footer">
                    <li className="footer-title"><a>{link.title}</a></li>
                    <li className="footer-link"><a>{link.link1}</a></li>
                    <li className="footer-link"><a>{link.link2}</a></li>
                    <li className="footer-link"><a>{link.link3}</a></li>
                    <li className="footer-link"><a>{link.link4}</a></li>
                    <li className="footer-link"><a>{link.link5}</a></li>
                </ul>
            </Col>
    )

    return (
        <div className="footer-section">
            <Container  className=" h-100 pt-5 ">
                
                <Row className="h-100" >
                    <Col md={3}>
                        <img src={Logo}/> 
                    </Col> 
                    {renderFooterLinks(FooterLinks)}
                </Row>
            </Container>
        </div>
    )
}

export default Footer

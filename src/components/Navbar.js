import React from 'react';
import Logo from '../images/logo.svg';
import {Navbar as _Navbar,Container, NavDropdown} from 'react-bootstrap';
import iconArrow from '../images/icon-arrow-light.svg';

function Navbar({renderBtns}) {
    const navLinks =[
        {
            link:"#",
            label: "Product",
            position:"Izquierda",
            subitem1: "Overview",
            subitem2: "Pricing",
            subitem3: "Marketplace"
        },
        {
            link:"#",
            label: "Company",
            position:"Izquierda",
            subitem1: "About",
            subitem2: "Team",
            subitem3: "Blog"
        },
        {
            link:"#",
            label:"Connect",
            position:"Izquierda",
            subitem1: "Contact",
            subitem2: "Newsletter",
            subitem3: "LinkedIn"
        },

    ]
    const navButtons=[
        {
            link:"#",
            label:"Login",
            tipo:"Login-btn"
        },
        {
            link:"#",
            label:"Sign Up",
            tipo:"white-btn"
        }
    ]
    const renderNavLinks = (links) =>
        links.map((link,index)=>
            <div className="d-flex flex-row " key={index}>
                <NavDropdown title={link.label} className={link.position} href={link.link}><img src={iconArrow}/>
                    <NavDropdown.Item href="#">{link.subitem1}</NavDropdown.Item>
                    <NavDropdown.Item href="#">{link.subitem2}</NavDropdown.Item>
                    <NavDropdown.Item href="#">{link.subitem3}</NavDropdown.Item>
                </NavDropdown>
            </div>
        )

    return (
        <_Navbar className="navbar-content">
            <Container className="mt-2" >
                <div className="d-flex flex-row">
                    <div>
                        <_Navbar.Brand href="#home"><img  src={Logo}/> </_Navbar.Brand>
                    </div>
                    {renderNavLinks(navLinks)}
                </div>
                <div className="d-flex flex-row">
                        {renderBtns(navButtons)}
                </div>
            </Container>
        </_Navbar>
    )
}

export default Navbar;
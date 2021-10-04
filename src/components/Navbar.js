import React from 'react';
import Logo from '../images/logo.svg';
import {Nav,Navbar as _Navbar,Container} from 'react-bootstrap';


function Navbar() {
    const navLinks =[
        {
            link:"#",
            label: "Product",
            position:"Izquierda"
        },
        {
            link:"#",
            label: "Company",
            position:"Izquierda"
        },
        {
            link:"#",
            label:"Connect",
            position:"Izquierda"
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
            <Nav.Link className={link.position} key={index} href={link.link}>{link.label}</Nav.Link>
        )
    const renderNavBtn = (links) =>
        links.map((link,index)=>
            <div className={`${link.tipo}`} key={index}>
                <Nav.Link href={link.link}>{link.label}</Nav.Link>
            </div>
        ) 
    return (
        <_Navbar  className="navbar-content">
            <Container className="mt-2" >
                <div className="d-flex flex-row">
                    <div>
                        <_Navbar.Brand href="#home"><img  src={Logo}/> </_Navbar.Brand>
                    </div>
                    <div className="d-flex flex-row ">
                        {renderNavLinks(navLinks)}
                    </div>
                </div>

                <div className="d-flex flex-row">
                        {renderNavBtn(navButtons)}
                </div>
            </Container>
         </_Navbar>
    )
}

export default Navbar

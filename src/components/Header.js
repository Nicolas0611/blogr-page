import React from 'react'
import { Nav,Navbar as _Navbar,Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
function Header() {

    const heroButtons=[
        {
            link:"#",
            label:"Start for free",
            tipo:"outline-btn"
        },
        {
            link:"#",
            label:"Learn More",
            tipo:"white-btn"
        }
    ]
    const renderBtns = (links) =>
    links.map((link,index)=>
        <div className={`${link.tipo}`} key={index}>
            <Nav.Link  href={link.link}>{link.label}</Nav.Link>
        </div>
    ) 
    return (
        <div className="Hero-section">
            <div className="bg-hero-section">
                <Navbar/>
                <div className="hero-content d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <div className="hero-text d-flex flex-column align-items-center">
                            <h1 className="text-center">A modern publishing platform</h1>
                            <span>Grow your audience and build your online brand</span>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            {renderBtns(heroButtons)}
                        </div>
                    </div>
                </div>  
            </div>      
        </div>
    )
}

export default Header

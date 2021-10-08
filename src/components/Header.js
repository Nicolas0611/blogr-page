import React from 'react';
import { Nav,Navbar as _Navbar} from 'react-bootstrap';

import Navbar from './Navbar'
function Header({title,span}) {

    const heroButtons=[
        {
            link:"#",
            label:"Start for free",
            tipo:"white-btn"
        },
        {
            link:"#",
            label:"Learn More",
            tipo:"outline-btn"
        }
    ]
    const renderBtns = (links) =>
    links.map((link,index)=>
        <div className={`${link.tipo}`} key={index}>
            <Nav.Link href={link.link}>{link.label}</Nav.Link>
        </div>
    ) 
    return (
        <div className="Hero-section">
            <div className="bg-hero-section">
                <Navbar
                    renderBtns={renderBtns}
                />
                <div className="hero-content d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <div className="hero-text d-flex flex-column align-items-center">
                            <h1 className="text-center">{title}</h1>
                            <span>{span}</span>
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

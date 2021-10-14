import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import styled from 'styled-components'
export default class NavBar extends React.Component {
    render(){
        return(
            <NavWrapper>
                <div>
                    <Navbar.Brand href="/">Develop Epic</Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </div>
            </NavWrapper>
        )
    }
}
const NavWrapper=styled.div`
    width:100; 
    background:grey;
    padding: 0 5rem;
    display:flex;
    justify-content:space-between;
`
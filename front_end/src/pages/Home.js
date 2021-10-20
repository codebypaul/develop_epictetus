import React from 'react'
import {Container} from 'react-bootstrap'
// components
import ContactForm from '../components/ContactForm'
export default class Home extends React.Component {
    render(){
        return(
            <>
            <h1>Home</h1>
            <Container>
                <ContactForm/>
            </Container>
            </>
        )
    }
}
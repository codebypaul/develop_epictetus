import React from 'react'
import {Card,Form,Button} from 'react-bootstrap'
export default class ContactForm extends React.Component {
    render(){
        return (
            <Card className='p-5'>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Enter your address
                        </Form.Label>
                        <Form.Control type='text' placeholder='123 Hometown Rd'/>
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
        )
    }
}
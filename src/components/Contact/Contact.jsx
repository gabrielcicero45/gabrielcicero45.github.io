import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Contact.scss'

export class Contact extends Component {
    render() {
        return (
            <section className="contact-area">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <h2 className="contact-title">Contato</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">img</div>
                        <div className="col-6">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nome : </Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Seu nome" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email : </Form.Label>
                                    <Form.Control size="lg" type="email" placeholder="email@exemplo.com" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label> Mensagem :</Form.Label>
                                    <Form.Control as="textarea" rows={10} />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                        <div className="col-3">img</div>
                    </div>
                </div>
            </section>
        )
    }
}
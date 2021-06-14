import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Contact.scss'

import contato1 from '../../assets/img/contato1.png'
import contato2 from '../../assets/img/contato2.png'

export class Contact extends Component {
    render() {
        return (
            <section className="contact-area" id="contato">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <h2 className="contact-title">Contato</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 d-md-block d-none"><img className="img-fluid my-auto" src={contato1} alt="" /></div>
                        <div className="col-md-6 col-12">
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
                        <div className="col-3 d-md-block d-none"><img className="img-fluid mt-3" src={contato2} alt="" /></div>
                    </div>
                </div>
            </section>
        )
    }
}
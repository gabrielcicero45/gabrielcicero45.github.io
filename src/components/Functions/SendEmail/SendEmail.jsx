import React from 'react'
import emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import contato1 from '../../../assets/img/contato1.png'
import contato2 from '../../../assets/img/contato2.png'

export default function SendEmail() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p2c4ha2', 'template_fthahjk', e.target, 'user_GDpjezjds5UZebcv1w4hN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

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
                        <Form onSubmit={sendEmail}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Nome : </Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Seu nome" name="name" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Assunto : </Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Assunto" name="subject" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email : </Form.Label>
                                <Form.Control size="lg" type="email" placeholder="email@exemplo.com" name="email" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label> Mensagem :</Form.Label>
                                <Form.Control as="textarea" rows={10} name="message" />
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
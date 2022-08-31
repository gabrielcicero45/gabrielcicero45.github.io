import React, { Component } from 'react'
import './Portfolio.scss'

export class Portfolio extends Component {
    render() {

        return (
            <section id="portfolio" className="portfolio-area bg-binary">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <h2 className="portfolio-title">Projetos</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <a href="https://encurta-ai.herokuapp.com/" target="blank">
                        <div className="card text-white card-has-bg click-col encurta-ai" >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                    <small className="card-meta mb-2">Encurtador de Link</small>
                                    <h3 className="card-title mt-0 "><a className="text-white" herf="#">Encurta Ai</a></h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        
                        </div>
                        <div className="col-md-4">
                        <a href="https://bytebank-angular.herokuapp.com/" target="blank">
                        <div className="card text-white card-has-bg click-col bytebank" >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                    <small className="card-meta mb-2">Banco Digital</small>
                                    <h3 className="card-title mt-0 "><a className="text-white" herf="#">ByteBank</a></h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                      
                        </div>
                        <div className="col-md-4">
                        <a href="https://ediaristas-eight.vercel.app/" target="blank">
                        <div className="card text-white card-has-bg click-col ediaristas" >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                    <small className="card-meta mb-2">Classificados</small>
                                    <h3 className="card-title mt-0 "><a className="text-white" herf="#">E-diaristas</a></h3>
                                    </div>
                                </div>
                        </div>
                        </a>
                        </div>
                        <div className="col-md-4 mt-5">
                        <a href="https://netflix-clone-ad5fd.web.app" target="blank">
                        <div className="card text-white card-has-bg click-col netflix" >
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                    <small className="card-meta mb-2">Clone de UI</small>
                                    <h3 className="card-title mt-0 "><a className="text-white" herf="#">Netflix Clone</a></h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                      
                        </div>
                    </div>
                </div>
            </section >

        )


    }

}
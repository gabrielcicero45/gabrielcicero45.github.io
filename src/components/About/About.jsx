import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import profile from '../../assets/img/profile.png'
import './About.scss'
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export class About extends Component {
    render() {

        return (
            <section id="sobre" className="about-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-12 mx-auto mt-5">
                            <div className="about-profile mt-4">
                                <Image src={profile} roundedCircle />
                            </div>
                            <div className="about-profile"><h3 className="about-name">Cicero Gabriel</h3></div>
                            <div className="about-profile">
                                <a href="mailto:gabrielcicero45@gmail.com" className="about-icon"><MdMailOutline /></a>
                                <a href="https://github.com/gabrielcicero45" className="about-icon"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/cicero-medeiros-6a6b56172/" className="about-icon"><FaLinkedin /></a>
                            </div>


                        </div>
                        <div className="col-md-7 col-12">
                            <h2 className="about-description">Sobre</h2>
                            <p>Sou graduando em Engenharia da computação pela UFRN, iniciei no desenvolvimento web no final de 2018 na empresa júnior do meu curso EJECT, dei meus primeiros passos com Python e Django. Em 2020 fiz estágio na empresa Interativa Digital onde desenvolvi alguns projetos em PHP com Wordpress.</p>
                            <p>Atualmente estou estagiando na Quark tecnologia.
                                Estou sempre em busca de novos conhecimentos e estudo as melhores ferramentas que estão em uso no mercado.</p>
                        </div>
                    </div>

                </div>
            </section>
        )


    }
}
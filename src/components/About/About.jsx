import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import profile from '../../assets/img/profile.png'
import './About.scss'
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export class About extends Component {
    render() {

        return (
            <section id="sobre" className="about-area bg-binary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-12 ml-5 mt-5">
                            <div className="about-profile mt-4 mx-auto">
                                <Image src={profile} roundedCircle />
                            </div>
                            <div className="about-profile mx-auto"><h3 className="about-name">Cicero Gabriel</h3></div>
                            <div className="about-profile mx-auto">
                                <a href="mailto:gabrielcicero45@gmail.com" className="about-icon"><MdMailOutline /></a>
                                <a href="https://github.com/gabrielcicero45" className="about-icon"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/cicero-medeiros-6a6b56172/" className="about-icon"><FaLinkedin /></a>
                            </div>


                        </div>
                        <div className="col-md-7 col-12">
                            <h2 className="about-description">Sobre</h2>
                            <p>Sou graduando em Ciências e Tecnologia pela UFRN desde 2018. Iniciei no desenvolvimento web no final de 2018 na empresa júnior do meu curso EJECT onde tive minha primeira experiência com Python,Django e Wordpress. 
                                Em 2020 fui estágiario na empresa Interativa Digital, desenvolvi alguns projetos em PHP com Wordpress.Em 2021 comecei a estagiar na Quark tecnologia, participei da manutenção do sistema QuarkEdu, um sistema na Stack Java.</p>
                            <p>Atualmente sou bolsista na área de Testes pelo IMD numa parceria com a Sascar
                                Tenho o foco em desenvolvimento Front-end e em Testes/Quality Assurance, estou sempre me especializando e estudando as melhores ferramentas em uso no mercado.</p>
                        </div>
                    </div>

                </div>
            </section>
        )


    }
}
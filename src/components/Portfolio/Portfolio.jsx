import React, { Component } from 'react'
import './Portfolio.scss'
import LottieAnimation from '../Functions/Lottie/Lottie'
import underConstruction from '../Animations/6873-under-maintenance.json'


export class Portfolio extends Component {
    render() {

        return (
            <section id="portfolio" className="portfolio-area">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <h2 className="portfolio-title">Projetos</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <LottieAnimation lotti={underConstruction} height={400} width={450}   ></LottieAnimation>
                            <h3 className="portifolio-title text-center">A área de projetos está em construção, em breve terá novidades !</h3>
                        </div>
                    </div>
                </div>
            </section >

        )


    }

}